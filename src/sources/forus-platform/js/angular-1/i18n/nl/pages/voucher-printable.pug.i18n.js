module.exports = {
    product_voucher: {
        labels: {
            use_for: 'Gebruik deze aanbiedings voucher voor:',
            description: 'Dit is uw ‘{{printableTitle}}’ voucher met een QR-code',
            show_to: 'Laat deze voucher eenmalig zien bij de destreffende aanbieder:',
            contact_us: 'Neem dan contact op met de aanbieder.'
        }
    },
    budget_voucher: {
        labels: {
            use_for: 'Gebruik deze budget voucher voor:',
            description: 'Dit is uw {{printableTitle}} voucher met een QR-code',
            show_to: 'Laat deze voucher zien bij een van de destreffende aanbieders, te vinden op:',
            contact_us: 'Neem contact op met:',
            condition: '',
            nijmegen: {
                condition: 'Hierbij bevestig ik dat ik heb verklaard aan de voorwaarden te voldoen. ' + 
                    'Ik weet dat er achteraf een controle op juistheid kan plaatsvinden met een mogelijkheid tot terugvordering.'
            },
        }
    },
    default: {
        labels: {
            purchases_notice: 'Aankopen met deze voucher kunnen niet worden geretourneerd',
            contact: {
                have_questions: 'Heeft u vragen over ‘{{printableTitle}}’?',
                phone: 'Telefoonnummer',
                email: 'E-mailadres',
            }
        }
    }
};