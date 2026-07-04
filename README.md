# IntuLing

IntuLing is an AI English learning Agent web application. It is designed to turn AI chat output into structured learning assets such as grammar notes, vocabulary items, collocations, and review tasks.

当前仓库已经搭建基础工程架构，业务模块会在后续逐个规划和实现。

## Tech Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, React Router, TanStack Query, lucide-react
- Backend: FastAPI, SQLAlchemy 2, Alembic, PostgreSQL, Pydantic Settings
- AI: LangChain, langchain-deepseek, langchain-openai
- Package managers: npm, uv

## Local Setup

1. 准备 PostgreSQL 本地数据库：

```powershell
createdb -h 127.0.0.1 -p 5432 -U postgres intuling_dev
createdb -h 127.0.0.1 -p 5432 -U postgres intuling_test
```

2. 复制环境变量：

```powershell
Copy-Item backend\.env.example backend\.env
Copy-Item frontend\.env.example frontend\.env
```

3. 如果你的 Postgres 密码不是 `postgres`，修改 `backend\.env` 里的 `DATABASE_URL` 和 `SYNC_DATABASE_URL`。

4. 执行数据库迁移：

```powershell
npm run migrate:api
```

5. 启动开发服务：

```powershell
npm run dev:api
npm run dev:web
```

前端默认运行在 http://localhost:5173，后端默认运行在 http://localhost:8000。

## Git Convention

- 主分支使用 `main`。
- 功能分支建议使用 `feat/<topic>`，修复分支建议使用 `fix/<topic>`。
- 提交信息可以使用中文，例如：`初始化项目基础架构`。
- 每个模块正式开发前先单独规划，再进入实现。
