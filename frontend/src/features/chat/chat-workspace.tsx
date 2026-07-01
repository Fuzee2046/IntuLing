import { Check, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

const starterMessages = [
  {
    role: 'user',
    text: 'Analyze this sentence: I have been learning English with AI for one week.',
  },
  {
    role: 'assistant',
    text: '这里后续会接入 LangChain 后端：先解释句子结构，再提取语法、单词、固定搭配，并生成可确认的整理建议。',
  },
]

export function ChatWorkspace() {
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px]">
      <section className="flex min-h-screen flex-col">
        <div className="border-b border-slate-200 bg-[#fbfaf7] px-5 py-4">
          <p className="text-sm text-slate-500">核心学习区</p>
          <h1 className="text-xl font-semibold text-slate-950">英语学习对话</h1>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
          {starterMessages.map((message) => (
            <article
              key={`${message.role}-${message.text}`}
              className={
                message.role === 'user'
                  ? 'ml-auto max-w-2xl rounded-md bg-[#2e6f6a] px-4 py-3 text-white'
                  : 'max-w-3xl rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm'
              }
            >
              <p className="text-sm leading-6">{message.text}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-200 bg-[#fbfaf7] p-4">
          <div className="flex min-h-28 flex-col gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
            <textarea
              className="min-h-20 resize-none border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="输入例句、单词或你的英语问题..."
            />
            <div className="flex justify-end">
              <Button type="button">
                <Sparkles className="size-4" aria-hidden="true" />
                发送
              </Button>
            </div>
          </div>
        </div>
      </section>

      <aside className="border-l border-slate-200 bg-[#fbfaf7] px-4 py-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Agent 建议</p>
            <h2 className="text-base font-semibold">待确认整理</h2>
          </div>
          <Sparkles className="size-5 text-[#b56b2b]" aria-hidden="true" />
        </div>

        <div className="mt-4 space-y-3">
          {['语法出现：现在完成进行时', '单词：learning', '搭配：with AI'].map((item) => (
            <div key={item} className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-sm text-slate-800">{item}</p>
              <div className="mt-3 flex justify-end">
                <Button type="button" variant="secondary" size="sm">
                  <Check className="size-4" aria-hidden="true" />
                  确认
                </Button>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
