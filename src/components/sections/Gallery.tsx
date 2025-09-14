import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Heart,
  Star,
  ShoppingCart,
} from 'lucide-react';

export default function JewelryGallery() {
  const collections = [
    {
      id: 1,
      title: 'Ethereal Moonstone Collection',
      category: 'Necklaces & Pendants',
      mainImage:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop',
      ],
      specs: { pieces: 12, materials: 'Sterling Silver, Moonstone', crafted: 'Hand-forged' },
      priceRange: '$89 - $245',
    },
    {
      id: 2,
      title: 'Vintage Rose Gold Rings',
      category: 'Statement Rings',
      mainImage:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
      ],
      specs: { pieces: 8, materials: '14k Rose Gold, Garnet', crafted: 'Hand-set' },
      priceRange: '$125 - $380',
    },
    {
      id: 3,
      title: 'Bohemian Turquoise Earrings',
      category: 'Artisan Earrings',
      mainImage:
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
      ],
      specs: { pieces: 15, materials: 'Silver Wire, Turquoise', crafted: 'Wire-wrapped' },
      priceRange: '$45 - $165',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Handcrafted Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections of unique, handmade jewelry pieces crafted with love
            and attention to detail
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(collection => (
            <Card
              key={collection.id}
              className="group overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.mainImage}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 gap-2">
                    <Grid3x3 className="size-4" />
                    {collection.images.length} Pieces
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-sm">{collection.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Collection Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {collection.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">4.9</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2">{collection.title}</h3>

                {/* Collection Specs */}
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Available Pieces:</span>
                    <span className="font-medium">{collection.specs.pieces}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Materials:</span>
                    <span className="font-medium text-right">{collection.specs.materials}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technique:</span>
                    <span className="font-medium">{collection.specs.crafted}</span>
                  </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="mb-4 grid grid-cols-4 gap-1">
                  {collection.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${collection.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full gap-2" variant="outline">
                  <ShoppingCart className="size-4" />
                  Explore Collection
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            <Grid3x3 className="size-4" />
            Browse All Jewelry Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
