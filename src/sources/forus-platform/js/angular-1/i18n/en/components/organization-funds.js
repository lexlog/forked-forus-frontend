module.exports = {
    organization_funds: {
        title: "Funds",
        buttons: {
            add: 'Add fund',
            edit: "Edit",
            delete: "Delete",
            top_up: "Top-up fund",
            criteria: "Criteria",
            statistics: "Stistics",
            top_up_history: "View transactions"
        },
        states: {
            active: "Active",
            paused: "Paused",
            closed: "Closed",
        },
        labels: {
            remaining: "Remaining:"
        },
        top_up_table: {
            filters: {
                search: "Search",
                code: "Code used",
                iban: "IBAN",
                amount: "Amount",
                amount_min: "0",
                amount_max: "All",
                from: "Created from",
                to: "Created to"
            },
            columns: {
                fund: "Fund",
                code: "Code used",
                iban: "IBAN",
                top_up_id: "Fund top up id",
                amount: "Amount",
                date: "Date",
            }
        }
    }
};