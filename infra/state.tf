
# # 버킷 생성
# resource "aws_s3_bucket" "state_bucket" {
#   bucket = "state-bucket"
#   tags = {
#     Name = "BuhwalChurchState"
#   }
# }

# resource "aws_s3_object" "state" {
#   bucket = aws_s3_bucket.state_bucket.id
#   key    = "terraform.tfstate"
#   source = "./terraform.tfstate"

#   content_type = "application/json"
# }


# # 퍼블릭 액세스 막기
# resource "aws_s3_bucket_public_access_block" "buhwalch_public_access" {
#   bucket = aws_s3_bucket.state_bucket.id

#   block_public_acls       = true
#   block_public_policy     = true
#   ignore_public_acls      = true
#   restrict_public_buckets = true
# }

# # 버킷 policy 적용
# resource "aws_s3_bucket_policy" "buhwalch_policy" {
#   bucket = aws_s3_bucket.state_bucket.id
#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [{
#       Sid       = "AllowCloudFrontServicePrincipal"
#       Effect    = "Allow"
#       Principal = { Service = "cloudfront.amazonaws.com" }
#       Action    = "s3:GetObject"
#       Resource  = "${aws_s3_bucket.buhwalch_bucket.arn}/*"
#       Condition = {
#         StringEquals = {
#           "AWS:SourceArn" = aws_cloudfront_distribution.buhwalch_distribution.arn
#         }
#       }
#     }]
#   })
# }
