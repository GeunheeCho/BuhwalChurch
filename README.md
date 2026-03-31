🛠 AWS S3 Static Website Migration with Terraform
📌 프로젝트 개요
목적: 기존 크리에이터링크(PaaS) 기반의 교회 홈페이지를 AWS 클라우드 인프라로 마이그레이션하여(IaaS) 비용 최적화 및 인프라 관리 효율성 증대

핵심 기술: AWS (S3, CloudFront), Terraform (IaC), Route53 가비아 도메인 연결

주요 특징: 모든 인프라 자원을 코드로 정의(IaC)하여 일관성 있는 프로비저닝 구현

🏗 시스템 아키텍처
User -> Route53 -> CloudFront (CDN/HTTPS) -> S3 Bucket (Origin)

🚀 주요 구현 내용
Infrastructure as Code (Terraform)

S3 Bucket: 정적 웹 사이트 호스팅 설정 및 정책 정의

Terraform State Management: 인프라 상태 파일을 통한 리소스 추적 및 형상 관리

Cost & Performance Optimization

트래픽에 따른 유연한 확장성 확보

🔍 Troubleshooting & Challenges (진행 중/예정)
CloudFront: 글로벌 캐싱 및 SSL/TLS 보안 적용 (HTTPS)
S3 보안 설정: 퍼블릭 액세스를 차단하고 CloudFront를 통해서만 접근 가능하도록 하는 Origin Access Control(OAC) 정책 적용 시의 권한 설정 이슈 해결

CI/CD 파이프라인: GitHub Actions를 연동하여 코드 수정 시 S3로 자동 배포 및 CloudFront 캐시 무효화(Invalidation) 자동화 구현 예정
페이지 생성 예정
