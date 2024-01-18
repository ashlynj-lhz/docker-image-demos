target "default" {
  context     = "."
  dockerfile  = "Dockerfile"
  platforms   = ["linux/amd64", "linux/arm64"]
  tags        = [
    "ajeetraina/mynode:v1.0.0",
    "ajeetraina/mynode:latest"
  ]
}
