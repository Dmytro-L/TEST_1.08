<template>
    <v-container>
        <v-card>
            <v-form @submit.prevent="onSubmit" style="padding: 10px;">
                <v-text-field v-model="emailValue" label="Email" :error-messages="errorMassageEmail"
                    required></v-text-field>
                <v-text-field v-model="password" label="Password" :error-messages="errorMassagePass"
                    required></v-text-field>
                <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import router from '../router';

const emailValue = ref('');
const password = ref('');
const errorMassageEmail = ref('');
const errorMassagePass = ref('');


const emailErrors = useVuelidate({ email: { required, email } }, { email: emailValue });
const passwordErrors = useVuelidate({ password: { required, minLength: minLength(6) } }, { password });
function onSubmit() {
    if (!emailErrors.value.$invalid && !passwordErrors.value.$invalid) {
        router.push('/game');
    } else {
        errorMassageEmail.value = emailErrors.value.$invalid ? 'Wrong email' : '';
        errorMassagePass.value = passwordErrors.value.$invalid ? 'Wrong password' : '';
    }
}
</script>