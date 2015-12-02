<style lang="sass" scoped>
    .project-display-container {
        display: flex;
    }

    .header {
        padding: 0.5em;
        h2 {
            font-size: 3em;
            margin: 0;
        }
    }
</style>

<template>
    <div class="header">
        <h2>Projects</h2>
        <hr>
    </div>
    <div class="project-display-container">
        <!-- project disply's go here !-->
        <slot>
    </div>
</template>
