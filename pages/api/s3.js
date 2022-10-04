import S3 from "aws-sdk/clients/s3";

// new s3 instance
const s3 = new S3({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: "v4",
});

// size limit config
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(400)
      .send("Method not allowed on my API - (only POST methods)");
  }

  try {
    // retreive name and type from request body
    let { name, type } = req.body;

    // set ACL params to read files
    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      Expires: 600,
      ContentType: type,
      ACL: "public-read",
    };

    // generate signed url to upload to s3
    const url = await s3.getSignedUrlPromise("putObject", fileParams);

    return res.status(200).json({ url });
  } catch (err) {
    console.log("API ERROR MESSAGE HERE: ");
    return res.status(400).send(err.message);
  }
}
