import prisma from "@/lib/prisma"
import { ReviewCard } from "./review-card";

export const ReviewSection = async () => {
    const reviews = await prisma.reviews.findMany();

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-8 max-w-[1000px] justify-around">
                {reviews?.map((review) => (
                    <ReviewCard review={review} key={review.reviewId} />
                ))}
            </div>
        </div>
    )
}