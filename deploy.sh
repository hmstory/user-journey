#!/bin/bash

# GitHub Pages 배포 스크립트
# dist 폴더의 내용을 gh-pages 브랜치에 배포

npm run build

# dist 폴더의 내용을 임시로 저장
cp -r dist/* .

# gh-pages 브랜치로 체크아웃 (없으면 생성)
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# 모든 파일 추가
git add .

# 커밋
git commit -m "Deploy to GitHub Pages"

# 푸시
git push origin gh-pages --force

# main 브랜치로 돌아가기
git checkout main

# 임시 파일 정리 (dist는 유지)
rm -rf index.html assets/

echo "배포 완료! GitHub Pages 설정에서 gh-pages 브랜치를 선택하세요."

