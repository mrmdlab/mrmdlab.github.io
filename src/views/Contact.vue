<template>
    <v-row>
        <v-col cols="8" class="text-center">
            <v-img height="90%" src="@/assets/photos/Biopolis sign.jpg" alt="Biopolis sign" />
            <p>"Biopolis sign" by Kelman Chiang from SG photobank</p>
        </v-col>
        <v-col cols="4" class="d-flex flex-column justify-center ubuntu">
            <p class="mb-4">If you are interested in collaboration, you are welcome to have a lab tour.</p>
            <h2>Address</h2>
            11 Biopolis Way, #01-02 Helios, Singapore 138667
            <h2>Email</h2>
            ong_qunxiang@a-star.edu.sg
        </v-col>
    </v-row>

    <h1 class="text-center mb-3">Contact us</h1>
    <v-form ref="form" @submit.prevent="send">
        <v-row class="justify-space-around">
            <v-col cols="6">
                <v-text-field :rules="required" label="Name" name="name" required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field :rules="required" label="Position" name="position" required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field :rules="emailRules" type="email" label="Email" name="email" required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select :items="reasons" :rules="required" label="Reason" name="reason" required></v-select>
            </v-col>
            <v-col cols="12">
                <v-text-field :rules="required" label="Organization" name="organization" required></v-text-field>
            </v-col>
            <v-col>
                <h3 class="text-center">Your Message</h3>
                <v-textarea name="message" rows="8" auto-grow :rules="required" required></v-textarea>
            </v-col>
        </v-row>
        <v-row justify="end">
            <v-col cols="4">
                <v-btn type="submit" color="primary" size="large" block>Send</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            emailRules: [v => (/.+@.+\..+/.test(v)) || 'E-mail must be valid'],
            reasons: [
                "interested in collaboration",
                "consult",
                "join our team"
            ],
            required: [v => !!v || 'required'],
            errMsg: "Oops! There was a problem sending your message. You can try sending Dr. Ong (ong_qunxiang@imcb.a-star.edu.sg) an email instead.",
            okMsg: "Thanks for contacting us! Your message was sent successfully"
        }
    },
    methods: {
        async send(event) {
            var result = await event
            if (result.valid) {
                const form_data = new FormData(event.target)
                fetch("https://formspree.io/f/xkgnbjwl", {
                    method: "POST",
                    body: form_data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        alert(this.okMsg)
                        this.$refs.form.reset()
                    } else {
                        alert(this.errMsg)
                    }
                }).catch(() => {
                    alert(this.errMsg)
                });
            }
        }
    }
}
</script>
