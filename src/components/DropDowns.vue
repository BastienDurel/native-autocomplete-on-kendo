<template>
    <Card>
        <CardHeader>
            <CardTitle>Dropdowns - fr</CardTitle>
        </CardHeader>
        <CardBody>
            <GridLayout :gap="{ rows: 3, cols: 3 }" :items="[
                { row: 1, col: 1, content: 'db' },
                { row: 2, col: 1, content: 'denom' },
                { row: 3, col: 1, content: 'commune' },
                { row: 4, col: 1, content: 'addr' },
            ]">
                <template v-slot:db>
                    <ComboBox :data-items="databases" v-model="db" :placeholder="'Société'" :text-field="'text'"
                        :id-field="'id'" name="database"></ComboBox>
                </template>
                <template v-slot:denom>
                    <MultiSelect :data-items="clientDenoms" :value="clientDenom" :placeholder="'Nom'"
                        :text-field="'text'" :id-field="'id'" :filterable="true">
                    </MultiSelect>
                </template>
                <template v-slot:commune>
                    <ComboBox :data-items="pdvCommunes" v-model="pdvCommune" :placeholder="'Commune'" :filterable="true"
                        name="pdvCommune"></ComboBox>
                </template>
                <template v-slot:addr>
                    <TextBox @keyup="validOnEnter" :placeholder="'Adresse'"></TextBox>
                </template>
            </GridLayout>
        </CardBody>
    </Card>
    <Card>
        <CardHeader>
            <CardTitle>Dropdowns - en</CardTitle>
        </CardHeader>
        <CardBody>
            <GridLayout :gap="{ rows: 3, cols: 3 }" :items="[
                { row: 1, col: 1, content: 'db' },
                { row: 2, col: 1, content: 'denom' },
                { row: 3, col: 1, content: 'commune' },
                { row: 4, col: 1, content: 'addr' },
            ]">
                <template v-slot:db>
                    <ComboBox :data-items="databases" v-model="db" :placeholder="'Company'" :text-field="'text'"
                        :id-field="'id'" name="database"></ComboBox>
                </template>
                <template v-slot:denom>
                    <MultiSelect :data-items="clientDenoms" :value="clientDenom" :placeholder="'Name'"
                        :text-field="'text'" :id-field="'id'" :filterable="true">
                    </MultiSelect>
                </template>
                <template v-slot:commune>
                    <ComboBox :data-items="pdvCommunes" v-model="pdvCommune" :placeholder="'City'" :filterable="true"
                        name="pdvCommune"></ComboBox>
                </template>
                <template v-slot:addr>
                    <TextBox @keyup="validOnEnter" :placeholder="'Adresse'"></TextBox>
                </template>
            </GridLayout>
        </CardBody>
    </Card>
    <Card>
        <CardHeader>
            <CardTitle>Dropdowns - fr - form</CardTitle>
        </CardHeader>
        <CardBody>
            <form autocomplete="off">
                <GridLayout :gap="{ rows: 3, cols: 3 }" :items="[
                    { row: 1, col: 1, content: 'db' },
                    { row: 2, col: 1, content: 'denom' },
                    { row: 3, col: 1, content: 'commune' },
                    { row: 4, col: 1, content: 'addr' },
                ]">
                    <template v-slot:db>
                        <ComboBox :data-items="databases" v-model="db" :placeholder="'Société'" :text-field="'text'"
                            :id-field="'id'" name="database"></ComboBox>
                    </template>
                    <template v-slot:denom>
                        <MultiSelect :data-items="clientDenoms" :value="clientDenom" :placeholder="'Nom'"
                            :text-field="'text'" :id-field="'id'" :filterable="true">
                        </MultiSelect>
                    </template>
                    <template v-slot:commune>
                        <ComboBox :data-items="pdvCommunes" v-model="pdvCommune" :placeholder="'Commune'"
                            :filterable="true" name="pdvCommune"></ComboBox>
                    </template>
                    <template v-slot:addr>
                        <TextBox autocomplete="off" @keyup="validOnEnter" :placeholder="'Adresse'"></TextBox>
                    </template>
                </GridLayout>
            </form>
        </CardBody>
    </Card>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import { GridLayout, Card, CardHeader, CardBody, CardTitle } from "@progress/kendo-vue-layout";
import { TextBox } from "@progress/kendo-vue-inputs";
import { ComboBox, MultiSelect } from '@progress/kendo-vue-dropdowns';

const databases = [{ "id": "MGGOPTIMARK", "text": "OPTIMARK" }, { "id": "MGGRMA", "text": "RMA" }];
const clientDenoms = [{ "id": "0301", "text": "FERRERO FRANCE - ZONE 1" }, { "id": "0302", "text": "FERRERO FRANCE - ZONE 2" }];
const pdvCommunes = [" ANDELYS", " BOURG EN BRESSE", " Challans", " LES PONTS DE CE", " Saint-Leger-sous-Cholet", " st jean d'angely", "¿POISSY", "16 PASSY", "ABSCON", "ACHERES", "ACHEUX EN AMIENOIS", "AGNOS", "AICIRITS CAMOU SUHAST", "AIGREFEUILLE D'AUNIS", "AIGREFEUILLE SUR MAINE", "AIGUEPERSE", "AIGUES MORTES", "AIGUES VIVES", "AILLANT SUR THOLON", "AILLY SUR NOYE", "AIMARGUES", "AIR SUR ADOUR", "AIRAINES", "AIRE SUR L ADOUR", "AIRE SUR LA LYS", "AIRE SUR L'ADOUR", "AISEREY", "AIX LES BAINS", "AIX LES BAINS CEDEX", "AIX LES MILLES", "AIXE S/VIENNE", "AIXE SUR VIENNE", "AIXLESBAINS", "ALES", "ALIN LES BAINS", "ALISSAS", "ALL STRASBOURG", "ALLINGES", "ALLONNES", "AMBARES ET LAGRAVE", "AMBOISE", "AMIENS", "AMIENS 1", "AMILLY MONTARGIS", "AMPHION LES BAINS", "AMPLEPUIS", "ANCENIS", "ANDELNANS", "ANDERNOS", "ANDERNOS LES BAINS", "ANDRESY", "ANGERS", "ANGERS CEDEX", "ANGERS CEDEX 01", "ANGOULEME (sud)", "ANGOULINS", "ANGOULINS SUR MER", "ANGRES", "ANNEMASSE", "ANSE", "ANTHY SUR LEMAN", "ANTHYSURLEMAN", "ANTIBES", "ANTIBES ROCHAT", "AOSTE", "AOUSTE SUR SYE", "ARBOIS", "ARC LES GRAY", "ARC S/TILLE", "ARCINS", "ARCIS SUR AUBE", "ARDRES", "ARES", "ARGELES GAZOST", "ARGELES SUR MER", "ARGELESSURMER", "ARGENCES", "ARGENT SUR SAULDRE", "ARGENTEUIL OUEST", "ARGENTON SUR CREUSE", "ARGENTRE DU PLESSIS", "ARLES", "ARMENTIERES", "ARNAS", "ARNOUVILLE LES GONESSE", "ARPAJON SUR CERE", "ARQUES", "ARRAS", "ARS EN RE", "ARS SUR MOSELLE", "ARS/MOSELLE", "ARTIGUES", "ARTIGUES PRES BORDEAUX", "ASNANS BEAUVOISIN", "ASNIERES", "ASNIERES SUR SEINE", "ASTAFFORT", "ATHIES", "ATHIES SOUS LAON"];
const db = ref();
const clientDenom = ref();
const pdvCommune = ref();
function submit(e) {
    console.log(e, arguments)
}
function validOnEnter(e) {
    if (e.key === "Enter") {
        nextTick(submit)
    }
}
</script>

<style scoped>
.k-card {
    max-width: 800px;
    margin: 1em auto 0;
}
</style>
