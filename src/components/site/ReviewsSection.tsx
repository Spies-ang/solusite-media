const reviews = [
  {
    quote:
      "We were running everything off a Facebook page and losing enquiries every week. Ian had a full demo site built before we had even spoken properly, and it looked better than sites costing ten times more. Bookings started coming through within the first month. Best business decision we made this year.",
    source: "Riverbend Function Venue",
  },
  {
    quote:
      "What sold me was that the website already existed when Ian called. No long briefs, no waiting around. He understood exactly what a driving school needs, set up our online booking, and had us live within days. Learners now find us on Google instead of only by word of mouth.",
    source: "Cornerstone Driving Academy",
  },
  {
    quote:
      "Solusite rebuilt our online presence from scratch and the difference has been night and day. The site is fast, it works perfectly on a phone, and clients keep telling us how professional it looks. Any small change we ask for gets handled the same day.",
    source: "Thornhill Catering Co.",
  },
];

const ReviewsSection = () => (
  <section id="reviews">
    <div className="container">
      <h2 className="section-label">
        <span>What clients say</span>
      </h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
            <p className="review-source">{review.source}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
