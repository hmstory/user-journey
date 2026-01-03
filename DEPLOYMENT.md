# 배포 가이드

## GitHub Pages 배포 방법

### 1. GitHub 저장소 생성
1. https://github.com/new 접속
2. 저장소 이름: `user-journey-map` (또는 원하는 이름)
3. Public으로 설정
4. "Create repository" 클릭

### 2. 저장소 연결 및 푸시
```bash
cd /Users/quokka/user-journey-map
git remote add origin https://github.com/hmstory/user-journey-map.git
git push -u origin main
```

### 3. GitHub Pages 설정
1. 저장소 Settings → Pages
2. Source: "GitHub Actions" 선택
3. 저장

### 4. 자동 배포
- `main` 브랜치에 푸시하면 자동으로 배포됩니다
- 배포 URL: `https://hmstory.github.io/user-journey-map/`

## 수동 배포 (대안)

만약 GitHub Actions가 작동하지 않으면:

1. Settings → Pages
2. Source: "Deploy from a branch" 선택
3. Branch: `main` / Folder: `/dist` 선택
4. 저장

그리고 빌드된 파일을 푸시:
```bash
npm run build
git add dist
git commit -m "Add dist for deployment"
git subtree push --prefix dist origin gh-pages
```

