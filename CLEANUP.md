# 🧹 Codebase Cleanup Guide

This document lists unnecessary files that can be safely removed to keep the project clean.

---

## ⚠️ Files to Delete

### Build Artifacts (Regenerated automatically)

| Path           | Description                       | Safe to Delete |
| -------------- | --------------------------------- | -------------- |
| `build/`       | Generated production build output | ✅ Yes         |
| `.svelte-kit/` | SvelteKit cache/temp files        | ✅ Yes         |
| `.netlify/`    | Netlify CLI cache                 | ✅ Yes         |

### Log Files

| Path            | Description   | Safe to Delete |
| --------------- | ------------- | -------------- |
| `build_log.txt` | Old build log | ✅ Yes         |

### Duplicate Assets

| Path                   | Description                               | Safe to Delete  |
| ---------------------- | ----------------------------------------- | --------------- |
| `public/images/me.jpg` | Duplicate of `static/images/me.jpg`       | ✅ Yes          |
| `public/` folder       | Appears unused (SvelteKit uses `static/`) | ⚠️ Verify first |

---

## 🔧 Cleanup Commands

Run these commands in PowerShell to clean up:

```powershell
# Remove build artifacts
Remove-Item -Recurse -Force build
Remove-Item -Recurse -Force .svelte-kit
Remove-Item -Recurse -Force .netlify

# Remove log files
Remove-Item build_log.txt

# Remove duplicate public folder (verify first!)
Remove-Item -Recurse -Force public
```

Or as a single command:

```powershell
Remove-Item -Recurse -Force build, .svelte-kit, .netlify, build_log.txt, public -ErrorAction SilentlyContinue
```

---

## 📝 Update .gitignore

Add these entries to `.gitignore` to prevent future clutter:

```gitignore
node_modules
.svelte-kit
build
.netlify
*.log
build_log.txt
```

---

## ✅ Files to Keep

These files are essential and should **NOT** be deleted:

- `src/` - All source code
- `static/` - Static assets (images, favicon)
- `package.json` & `package-lock.json` - Dependencies
- `svelte.config.js` - SvelteKit configuration
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `netlify.toml` - Deployment configuration
- `README.md` - Project documentation
- `.vscode/` - VS Code settings

---

## 📊 Space Saved

Estimated cleanup savings:

- **build/** ~2-5 MB
- **.svelte-kit/** ~1-3 MB
- **public/images/me.jpg** ~70 KB
- **build_log.txt** ~5 KB

**Total: ~3-8 MB** (varies based on build size)
