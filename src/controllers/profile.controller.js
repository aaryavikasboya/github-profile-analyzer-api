import { db } from "../db/indexDB.js"
import { analyzeUser } from "../controllers/github.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const userById = asyncHandler(async (req, res) => {
    const { id } = req.params
    const userId = Number(id)
    if (isNaN(userId)) {
        throw new ApiError(400, "Invalid ID")
    }

    const [userProfile] = await db.query(`
            SELECT * FROM profiles WHERE id= ?`,
        [userId]
    );

    if (!userProfile || userProfile.length === 0) {
        throw new ApiError(404, "Profile not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, userProfile[0], "Profile fetched successfully"))
})
const searchUsers = asyncHandler(async (req, res) => {
    const { username } = req.query
    if (!username) {
        throw new ApiError(400, "Username is required")
    }

    const [users] = await db.query(`
            SELECT * FROM profiles WHERE username LIKE ?`,
        [`%${username}%`]
    );
    if (!users || users.length === 0) {
        throw new ApiError(404, "Profile not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, users, "Profile fetched successfully"))
})

const allUsers = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;
    const [userProfiles] = await db.query(`
            SELECT * FROM profiles LIMIT ? OFFSET ?
        `, [limit, offset]);

    if (!userProfiles || userProfiles.length === 0) {
        throw new ApiError(500, "Error while fetching profiles")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, userProfiles, "Profile fetched successfully"))
})

export { userById, allUsers, searchUsers }