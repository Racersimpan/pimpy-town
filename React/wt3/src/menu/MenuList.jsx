import { useState } from 'react'
import { useEffect } from 'react'
import { menuCategories } from './menuItems'
import { pickRandomItems } from './randomizer'

const sushiImage = '/images/illustration-of-sushi-roll-vector.jpg'

function MenuCard({ item }) {
  return (
    <article className="menu-item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <strong>{item.price}</strong>
      {item.bites && (
        <div className="sushi-container" aria-label={`${item.bites} sushi-bitar`}>
          {Array.from({ length: Math.min(item.bites, 20) }, (_, index) => (
            <img key={index} className="sushi-bite" src={sushiImage} alt="" />
          ))}
        </div>
      )}
    </article>
  )
}

function MenuCategory({ category }) {
  const [isOpen, setIsOpen] = useState(category.name === 'Testa dessa!' || category.name === 'Sushi')

  return (
    <section className="category-layout">
      <button
        className={category.featured ? 'category-title featured' : 'category-title'}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{category.name}</span>
        {!category.featured && <span className="category-arrow">{isOpen ? '↓' : '←'}</span>}
      </button>
      {isOpen && (
        <div
          className="menu-box-container"
          style={category.image ? { '--category-image': `url(${category.image})` } : undefined}
        >
          {category.items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}

function MenuList() {
  const [todayItems, setTodayItems] = useState([])
  const [randomizerError, setRandomizerError] = useState('')

  useEffect(() => {
    let isCurrent = true

    async function loadTodayItems() {
      try {
        const response = await fetch('/meny.json')
        if (!response.ok) {
          throw new Error(`Kunde inte läsa menyn (${response.status})`)
        }

        const data = await response.json()
        const allItems = data.Mat.flatMap((category) => category.items)
        const randomItems = pickRandomItems(allItems, 3).map((item) => ({
          name: item.namn,
          description: item.beskrivning,
          price: `${item.pris} kr`,
        }))

        if (isCurrent) {
          setTodayItems(randomItems)
        }
      } catch (error) {
        if (isCurrent) {
          setRandomizerError(
            error instanceof Error ? error.message : 'Kunde inte läsa dagens meny',
          )
        }
      }
    }

    loadTodayItems()

    return () => {
      isCurrent = false
    }
  }, [])

  const categories = menuCategories.map((category) =>
    category.featured ? { ...category, items: todayItems } : category,
  )

  return (
    <div className="menu-layout">
      <h1>Meny</h1>
      {categories.map((category) => (
        <MenuCategory key={category.name} category={category} />
      ))}
      {randomizerError && <p className="menu-error">{randomizerError}</p>}
    </div>
  )
}

export default MenuList
