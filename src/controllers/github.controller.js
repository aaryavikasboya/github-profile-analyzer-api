import { db } from "../db/indexDB.js";
import { gitHubUserFetch } from "../services/github.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const analyzeUser = asyncHandler(async (req, res) => {
    const { username } = req.params;
    const user = await gitHubUserFetch(username)

    if (!user || user.message === "Not Found") {
        return res
            .status(404)
            .json(new ApiResponse(404, "Invalid Username"))
    }

    const userData = {
        username: user.login,
        followers: user.followers,
        following: user.following,
        public_repos: user.public_repos,
        avatar_url: user.avatar_url,
        profile_url: user.html_url
    }
    try {
        await db.query(
            "INSERT INTO profiles (username, followers, following, public_repos, avatar_url, profile_url) VALUES (?, ?, ?, ?, ?, ?)",
            [userData.username,
            userData.followers,
            userData.following,
            userData.public_repos,
            userData.avatar_url,
            userData.profile_url]
        );
    } catch (err) {
        if (err.code === "ER_DUP_ENTRY") {
            throw new ApiError(409, "User already exists in DB");
        }

        throw new ApiError(500, "Database insert failed");
    }

    return res
        .json(new ApiResponse(200, userData, "User data fetched successfully"))
})

export { analyzeUser }