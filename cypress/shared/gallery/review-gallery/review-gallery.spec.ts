import { ReviewGalleryObject } from '../review-gallery/review-gallery.object'
const reviewGalleryObject = new ReviewGalleryObject()
export class ReviewGallerySpec {
    public isReviewGalleryWorking(container: string): void {
        describe('Тест галереи отзывов', () => {
            it('Скролл галереи', () => {
                reviewGalleryObject.scrollGalleryByArrow(container, 'right', 2)
            })
        })
    }
}
