# trendAI - Backend

## 🚀 Getting Started

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-repo/trendai-backend.git
cd trendai-backend

 2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following:

ini
Copy
Edit
MONGO_URI=mongodb+srv://your-mongodb-uri
JWT_SECRET=your_secret_key
PORT=5000
4️⃣ Start the Backend Server
sh
Copy
Edit
npm run start
The API will be available at http://localhost:5000

🛠 API Endpoints
🔐 Authentication (JWT)
Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/login	Authenticate and get JWT token

📢 Campaigns
Method	Endpoint	Description
GET	/campaigns	Get all campaigns
POST	/campaigns	Create a new campaign (admin only)
PATCH	/campaigns/:campaignId	Update a campaign
DELETE	/campaigns/:campaignId	Delete a campaign

📩 Submissions
Method	Endpoint	Description
POST	/submissions	Submit content for a campaign
GET	/submissions/performance	Get performance metrics
GET	/submissions/campaign/:campaignId	Get all submissions for a campaign
PATCH	/submissions/:submissionId	Approve/reject a submission

🔒 Authentication (JWT Guard)
This project uses JWT authentication to protect API routes.
To make authenticated requests, include the token in the headers:

sh
Copy
Edit
Authorization: Bearer your_jwt_token

🐳 Running with Docker (Optional)
If you want to run the backend in a Docker container, use:

sh
Copy
Edit
docker-compose up --build
Make sure to update your Dockerfile and docker-compose.yml accordingly.# trendai-backend
