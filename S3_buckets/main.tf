provider "aws" {
  region = "ap-northeast-2"
}
resource "aws_s3_bucket" "buhwalch-bucket" {
  bucket = "buhwalch-bucket"
  tags = {
    Name = "BuhwalChurch"
  }
}
resource "aws_s3_bucket_public_access_block" "buhwalch-public-access" {
  bucket = aws_s3_bucket.buhwalch-bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.buhwalch-bucket.id

  depends_on = [aws_s3_bucket_public_access_block.buhwalch-public-access]

  policy = jsonencode({
    Version : "2012-10-17",
    "Statement" : [
      {
        Sid : "PublicReadGetObject",
        Effect : "Allow",
        Principal : "*",                                                  //모든 사람에게 access
        Action : ["s3:GetObject"],                                        //getobject라는 action을 허용
        Resource : ["arn:aws:s3:::${aws_s3_bucket.buhwalch-bucket.id}/*"] //허용히는 버킷
      }
    ]
    }
  )
}

resource "aws_s3_bucket_website_configuration" "buhwalch-web-config" {
  bucket = aws_s3_bucket.buhwalch-bucket.id

  index_document {
    suffix = "main.html"
  }

  # error_document {
  #   key = "error.html"
  # }

  # routing_rule {
  #   condition {
  #     key_prefix_equals = "docs/"
  #   }
  #   redirect {
  #     replace_key_prefix_with = "documents/"
  #   }
  # }
}

resource "aws_s3_object" "html" {
  bucket = aws_s3_bucket.buhwalch-bucket.id
  key = "main.html"
  source = "../main.html"

  content_type = "text/html"
}
resource "aws_s3_object" "css" {
  bucket = aws_s3_bucket.buhwalch-bucket.id
  key = "style.css"
  source = "../style.css"

  content_type = "text/css"

}

resource "aws_s3_object" "image-logo" {
    bucket = aws_s3_bucket.buhwalch-bucket.id
  key = "교회 로고.png"
  source = "../img/교회 로고.png"

  content_type = "image/png"

}



