# GitHub Workflow & Contribution Guide

## 1. Keeping Your Local Codebase Up to Date

Before starting any work, ensure your local codebase is up to date with the `main` branch.

### **Steps to Sync with Main**

```sh
# Checkout main branch
git checkout main

# Fetch latest changes from remote
git fetch origin

# Merge latest changes
git pull origin main

# Update your feature branch if necessary
git checkout your_branch_name
git rebase main
```

If there are conflicts, resolve them before proceeding.

---

## 2. Branch Naming Conventions

Branch names should follow this format:

```
[type]/[description]
```

- `feature/login_page`
- `bugfix/user_auth`
- `hotfix/payment_error`

---

## 3. Commit Message Format

Each commit should have a clear message stating **what the commit does**:

```sh
Update main hero div
Fix login authentication issue
Refactor database query for performance improvement
```

### **Adding Files to a Commit**

To add files to a commit, use the following commands:

```sh
# Add specific files
git add filename.ext

# ONLY ADD FILES YOU ARE WORKING ON. DO NOT USE
# git add ./
```

After adding the files, commit the changes:

```sh
git commit -m "Your commit message here"
```

---

## 4. Pull Request Workflow

### **Feature Branch Workflow**

1. Create a feature branch from `dev`.
2. Push your changes and create a PR targeting `dev`.
3. A PR must receive **2 approvals** before merging into `dev`.
4. If the feature works as intended in `dev`, it can be merged into `main` **after 2 more approvals**.

### **PR Message Format**

Each PR should include the following sections:

#### **Title:**

- Number and title of the Jira ticket

#### **Summary of Changes:**

- Brief description of what was changed.

#### **Before/After Screenshots (if applicable):**

- Visual representation of the changes or a link to a preview.

### **Example PR Message**
```md
### Title:
[#1 Fixes Authentication]

### Summary of Changes:
- Fixed incorrect password validation logic.
- Updated error messages for failed login attempts.
- Improved test coverage for authentication.

### Before/After Screenshots:
**Before:**
[Insert image or link]

**After:**
[Insert image or link]
```

---

## 5. Code Style Guidelines

- Follow the appropriate style guide for the language:
  - **JavaScript:** ESLint
  - **Python:** PEP8
- PRs should focus **only on the assigned feature**. **Do not bundle multiple changes into one PR.**
  - This makes reviews faster and avoids unnecessary conflicts.

---

## 6. Reporting Issues

If you encounter any issues:

1. Post about it in the team chat.
2. Create an issue on the issue board with:
   - **Steps to reproduce**
   - **Expected vs actual behavior**
   - **Screenshots (if applicable)**

This ensures quick debugging and resolution.

---

Following these guidelines will help maintain a smooth and efficient workflow for the team. 🚀
