import { useQuery } from '@tanstack/react-query'

import { apiClient } from '@/lib/api-client'
import { cn } from '@/lib/utils'

type HealthResponse = {
  status: string
  database: boolean
}

export function HealthBadge({ compact = false }: { compact?: boolean }) {
  const healthQuery = useQuery({
    queryKey: ['health'],
    queryFn: () => apiClient.get<HealthResponse>('/health'),
    retry: 1,
  })

  const isHealthy = healthQuery.data?.status === 'ok'

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-md border px-3 py-2 text-xs',
        isHealthy
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
          : 'border-amber-200 bg-amber-50 text-amber-700',
        compact && 'px-2 py-1',
      )}
      title="后端和数据库健康状态"
    >
      <span
        className={cn(
          'size-2 rounded-full',
          isHealthy ? 'bg-emerald-500' : 'bg-amber-500',
        )}
      />
      {compact ? 'API' : isHealthy ? 'API 已连接' : 'API 待连接'}
    </div>
  )
}
