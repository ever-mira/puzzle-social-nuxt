<template>
  <Page>
    <Heading>
      Ort eintragen
      <template v-slot:subtitle>
        füge einen neuen Ort hinzu
      </template>
    </Heading>

    <div class="mt-11 w-100">
      <div class="mb-3">
        <Input type="text" placeholder="Name des Ortes" v-model="place.name" autofocus class="!w-full" />
      </div>
      <div class="mb-3">
        <Textarea type="text" placeholder="Beschreibung" v-model="place.description" class="!w-full h-35 resize-none" />
      </div>
      <div class="mb-7">
        <Input type="text" placeholder="Website" v-model="place.website" class="!w-full" />
      </div>
      <div class="mb-7" v-if="message">
        {{ message }}
      </div>

      <div class="mt-10">
        <Button color="indigo" @click="save" class="!px-5.5">
          Speichern
        </Button>
        <Button color="red" to="/places" class="ml-4 !px-5.5">
          Abbrechen
        </Button>
      </div>
    </div>

  </Page>
</template>

<script setup lang="ts">
const place = reactive({
  name: '',
  description: '',
  website: ''
})

const message = ref('')
const user = useSupabaseUser()

async function save() {
  message.value = ''

  try {
    if (!place.name || !place.description) {
      message.value = 'Name und Beschreibung sind erforderlich'
      return
    }

    if (!user.value) {
      message.value = 'Du musst eingeloggt sein, um einen Ort erstellen zu können.'
      return
    }

    const result = await $fetch('/api/places', {
      method: 'POST',
      body: toRaw(place),
      headers: useRequestHeaders(['cookie'])
    })

    message.value = 'Ort wurde erstellt.'

  } catch (error: any) {
    message.value = error.message
  }
}
</script>

<style></style>
