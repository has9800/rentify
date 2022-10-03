# A rental property listing app built using AWS 🏡

This is an app that's built using Next.js & Tailwind on the frontend, and AWS on the backend. The main goal is to use AWS services to retrieve and upload data to a database, and media files to a storage bucket from a Next.js app.

**The frontend uses:**
- Next.js
- Next.js API routes
- TailwindCSS
- React Testing Library - unit tests
- Playwright - end to end tests
- GitHub Actions - to run all tests on PR's

**On the backend, I decided to build my own API using the following aws tools:**
- AWS API Gateway - to create a REST API
- AWS Lambda functions - to execute serverless functions
- AWS DynamoDB - store s3 uri's
- AWS S3 - to store media uploads such as images property listings

For performance, the downstream caching method I'm using is Cache-Control headers, and Client-side rendering.

<hr />

## Overview

The client fetches the data through the endpoint, lambda, fetch URI, fetch data, return data, cache data.
