# IntuLing

IntuLing 是一个面向英语学习的 AI Agent Web 应用。当前仓库只搭建基础工程架构，业务模块会在后续逐个规划和实现。

## Tech Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, React Router, TanStack Query, lucide-react
- Backend: FastAPI, SQLAlchemy 2, Alembic, PostgreSQL, Pydantic Settings
- AI: LangChain, langchain-deepseek, langchain-openai
- Package managers: pnpm, uv

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
pnpm migrate:api
```

5. 启动开发服务：

```powershell
pnpm dev:api
pnpm dev:web
```

前端默认运行在 http://localhost:5173，后端默认运行在 http://localhost:8000。

## Git Convention

- 主分支使用 `main`。
- 功能分支建议使用 `feat/<topic>`，修复分支建议使用 `fix/<topic>`。
- 提交信息可以使用中文，例如：`初始化项目基础架构`。
- 每个模块正式开发前先单独规划，再进入实现。

