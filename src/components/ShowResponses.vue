<template>
    <div>
            <v-card elevation="1" style="padding:30px;margin-top: 20px;">
                <h2> 0 Responses</h2>
            </v-card>
    </div>

</template>

<script>
    export default {
        name: 'ShowResponses',
        data() {
            return {
                tab: null,
                items: ['Paragraph', 'Short Answer', 'Multiple Choice']
            }
        },
    }
</script>