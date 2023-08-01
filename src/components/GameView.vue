<template>
    <div>
        <v-container>
            <v-text-field v-model="sizeX" label="Enter Size X to start Game"></v-text-field>
            <v-text-field v-model="sizeY" label="Enter Size Y to start Game"></v-text-field>
            <v-btn @click="onLogout" color="success">Log out</v-btn>
        </v-container>
        <div class="game-container" v-if="squares.length">
            <div class="game-wrapper">
                <div v-for="y in parseInt(sizeY)" :key="y" style="display: flex;">
                    <div v-for="x in parseInt(sizeX)" :key="x"
                        :style="{ background: squares[x - 1][y - 1] ? 'white' : 'blue' }" @mouseover="toggleSquare(x, y)"
                        class="square">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import router from '../router';

const sizeX = ref('64');
const sizeY = ref('64');
const squares = ref([]);

onMounted(() => {
    getSquares()
})

watch([sizeX, sizeY], () => {
    getSquares()
});

function getSquares() {
    const x = parseInt(sizeX.value);
    const y = parseInt(sizeY.value);
    squares.value = (x && y) ? Array(x).fill().map(() => Array(y).fill(false)) : [];
}

function toggleSquare(x, y) {
    squares.value[x - 1][y - 1] = !squares.value[x - 1][y - 1];
}

function onLogout() {
    router.push('/');
}
</script>

<style lang="scss">
.row {
    display: flex;
}

.game-container {
    background-color: rgb(38, 38, 38);
    display: flex;
}

.game-wrapper {
    margin: auto;
}

.square {
    margin: .5px;
    width: 36px;
    height: 36px;
    transition: all .4s;

    &:hover {
        cursor: pointer;
    }
}
</style>