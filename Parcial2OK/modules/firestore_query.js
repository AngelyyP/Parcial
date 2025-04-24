import { db } from './firebase_init.js';
import {
    collection,
    query,
    where,
    orderBy,
    limit,
    startAt,
    endAt,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

//Second Point
async function seedTasks(teamId, projectId, taskId){
    const firestore = new FirestoreService("/Teams/tHXBCfBNVk75viPOAOrf/projects/0bO6PKT7E8zp5gtJ0L4t/tasks/axMmNQPQ7MMxTX7Gntm0");
    return firestore;
}

//Five point
async function countHighPriorityPendingTasks(teamId, userId) {
    const q = query(
        collection(db, `/Teams/${teamId}/Projects/projectId/Tasks`),
        where("priority", "==", "high"),
        where("status", "==", "pending")
    );

    const snapshot = await getDocs(q);
    return snapshot.size; 
}

export class FirestoreQuery {
    constructor(collectionName) {
        this.collectionRef = collection(db, collectionName);
    }

    //Third point
    async getUserCriticalTasks(teamId, userId){
        const q = query(
            collection(db, teamId),
            where("assignedTo", "==", userId),
            where("priority", "==", "hight"),
            where("status", "==", "pending"),
            orderBy("status"),
            orderBy("createdAt")
        );
        const snapshot = await getDocs(q);
        return snapshot .docs.map(doc =>({ id: doc.id, ...doc.data() }))
    }

}