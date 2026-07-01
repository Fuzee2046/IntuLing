import { Navigate, Route, Routes } from 'react-router-dom'

import { AppShell } from '@/components/layout/app-shell'
import { ChatWorkspace } from '@/features/chat/chat-workspace'
import { ComingSoonPage } from '@/pages/coming-soon-page'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<ChatWorkspace />} />
        <Route
          path="grammar"
          element={<ComingSoonPage title="语法树" description="后续按关卡式语法路线展开学习。" />}
        />
        <Route
          path="notes"
          element={<ComingSoonPage title="笔记" description="后续承接 AI 自动整理和你的手动编辑。" />}
        />
        <Route
          path="vocabulary"
          element={<ComingSoonPage title="单词本" description="后续收录单词、搭配、例句和复习计划。" />}
        />
        <Route
          path="phonetics"
          element={<ComingSoonPage title="音标" description="后续提供音标表、发音示例和记忆练习。" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
