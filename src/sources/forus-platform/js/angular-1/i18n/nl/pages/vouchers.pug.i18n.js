module.exports = {
    header: {
        title: "Vouchers",
    },
    labels: {
        id: 'ID',
        state: "Status",
        activation_code: "Code",
        details_activation_code: 'Activatiecode',
        amount: "Bedrag",
        assigned_to: "Methode",
        assigned: "Status",
        actions: "Acties",
        source: "Aangemaakt door",
        created_date: "Aangemaakt op",
        expire_date: "Geldig tot en met",
        voucher_count_per_identity: "Aantal tegoeden",
        expired: "Verlopen",
        email: "E-mailadres",
        fund: "Fonds",
        granted: "Toegewezen",
        used: "In gebruik",
        used_date: 'In gebruik date',
        note: "Notitie",
        search: "Zoeken",
        qr_code: "QR-Code",
        yes: "Ja",
        no: "Nee",
        source_employee: "Medewerker",
        source_user: "Gebruiker",
        active: 'Actief',
        deactivated: 'Gedeactiveerd',
        pending: 'Inactief',
        uid: 'Uniek nummer',
        limit_multiplier: 'Aantal personen',
        physical_card: "Pasnummer",
        bsn: "Burgerservicenummer",
        from: "Vanaf",
        to: "Tot en met",
        date_type: 'Pas toe op',
    },
    events: {
        created_budget: 'Aangemaakt',
        created_product: 'Aangemaakt',
        activated: 'Geactiveerd',
        deactivated: 'Gedeactiveerd',
    },
    buttons: {
        add_new: "Aanmaken",
        upload_csv: "Upload bulkbestand",
        export: "Export",
        clear_filter: "Wis filter",
        physical_card_add: "Plastic pas koppelen",
        physical_card_delete: "Pas ontkoppelen",
        activate: "Activeren",
        make_transaction: "Nieuwe transactie",
        make_top_up_transaction: "Opwaarderen",
    },
    csv: {
        default_note: "Aangemaakt op {{ upload_date }} door {{ uploader_email }}, toegekend aan {{ target_email }}",
        default_note_no_email: "Aangemaakt op {{ upload_date }} door {{ uploader_email }}",
    },
};
