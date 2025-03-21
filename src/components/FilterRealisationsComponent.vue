<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    selectedCategory: {
      type: String,
      default: 'Tous'
    }
  },
  methods: {
    selectCategory(category) {
      this.$emit('filter-category', category)
    }
  }
}
</script>

<template>
  <div class="filter-container">
    <h3>Filtrer par catégorie:</h3>
    <div class="filter-buttons">
      <button @click="selectCategory('Tous')" :class="{ active: selectedCategory === 'Tous' }">
        Tous
      </button>
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  padding-bottom: 30px;
  padding: 15px;
  text-align: center;
  background-color: rgba(245, 245, 245, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
}

.dark-mode .filter-container {
  background-color: #212225;
}

.filter-container h3 {
  margin-bottom: 15px;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
}

button {
  padding: 10px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  color: #333;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

button.active {
  background-color: #4caf50;
  color: white;
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
  border-color: transparent;
}

button.active:hover {
  background-color: #45a049;
}

button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

button:active::before {
  width: 200px;
  height: 200px;
  opacity: 0;
}

/* Styles pour le mode sombre */
.dark-mode {
  background-color: rgba(40, 44, 52, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.dark-mode h3 {
  color: #dbdbdb;
}

.dark-mode button {
  background-color: rgba(60, 65, 75, 1);
  color: #e0e0e0;
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode button:hover {
  background-color: rgba(70, 75, 85, 1);
}

.dark-mode button.active {
  background-color: #448f47;
  box-shadow: 0 4px 10px rgba(92, 188, 96, 0.3);
}

.dark-mode button.active:hover {
  background-color: #52a154;
}

@media (max-width: 768px) {
  .filter-buttons {
    gap: 8px;
  }

  button {
    padding: 8px 14px;
    font-size: 0.9rem;
  }
}
</style>
