<template>
    <div>
        <v-card elevation="1" style="padding:30px;margin-top: 20px;">
            <h2> {{payload.data.count }} Responses</h2>

            <div v-for="chart,index in payload.data.data" :key="index">
                <p>{{ chart.question }}</p>
                <Bar :id="`id_${index}`" :options="chartOptions" :data="chart.chartData" />
            </div>

            <div v-for="p , i in Object.keys( payload.data.non_choices_answer )" :key="i">
                <h2>{{ p }}</h2>


                
                <ol>

                    <li  v-for="answer, j in  payload.data.non_choices_answer[p]" :key="j">
                        {{answer  }}
                    </li>
                </ol>

            </div>



        </v-card>
    </div>
</template>

<script>
    import {
        Bar
    } from 'vue-chartjs'
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {
        name: 'ShowResponses',
        components: {
            Bar
        },
        data() {
            return {
                tab: null,
                payload: {},
                chartData: {
                    labels: ['January', 'February', 'March'],
                    datasets: [{
                        data: [40, 20, 12]
                    }]
                },
                chartOptions: {
                    responsive: true
                }


            }
        },
        methods: {
            fetchResponses() {
                fetch(`http://127.0.0.1:8000/api/responses/${this.$route.params.form_code}/`)
                    .then(response => response.json())
                    .then(result => {
                        this.payload = result
                        console.log(result)
                    })

            }
        },
        created() {
            this.fetchResponses()
        }
    }
</script>