import { type Review } from '@/api/products'

interface ProductReviewsProps {
  reviews: Review[]
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500 italic">No reviews yet.</p>
  }

  return (
    <div className="mt-12 border-t pt-10">
      <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
      <div className="space-y-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="border-b pb-8 last:border-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-bold text-gray-900">{review.reviewerName}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
