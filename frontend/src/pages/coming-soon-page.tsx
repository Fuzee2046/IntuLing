type ComingSoonPageProps = {
  title: string
  description: string
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-xl rounded-md border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">模块入口已预留</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-950">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </section>
    </div>
  )
}
