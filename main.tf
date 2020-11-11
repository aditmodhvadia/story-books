terraform{
    backend "gcs" {
        bucket = "storybooks-project-terraform"
        prefix = "/state/storybooks"
    }
}