import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    files: defineTable({
        name: v.string(),
        // orgId: v.optional(v.string()),
        orgId: v.string(),
    }).index('by_orgID', ['orgId']),

    users: defineTable({
        tokenIdentifier: v.string(),
        name: v.optional(v.string()),
        orgIds: v.array(
            v.object({
                orgId: v.string(),
            })
        ),
    }).index("by_tokenIdentifier", ["tokenIdentifier"]),
});