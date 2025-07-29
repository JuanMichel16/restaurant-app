export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}


export const getImagePath = (imagePath: string) => {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com';

  if(imagePath.startsWith(cloudinaryBaseUrl)) {
    return imagePath
  } else {
    return `/products/${imagePath}.jpg`
  }
}

export const formatDate = (date: Date | null) => {
  if(!date) return ''

  if(date instanceof Date) return date.toLocaleString(); 

  return new Date(date).toLocaleString();
}
