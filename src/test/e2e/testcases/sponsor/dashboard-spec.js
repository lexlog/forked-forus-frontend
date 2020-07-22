var dashboard = require('../pages/dashboard/sponsor/dashboardSponsorPage');
var utils = require('../pages/utils')
var sponsor = require('../pages/sponsor/sponsorPage')
var funds = require('../pages/dashboard/sponsor/fundsPage');
var productVouchers = require('../pages/dashboard/sponsor/productVouchersPage')
var vouchers = require('../pages/dashboard/sponsor/vouchersPage')
var employees = require('../pages/dashboard/employeesPage')
var requesters = require('../pages/dashboard/requestersPage')


// testing dashboard functionality
// first testing if fund/vouchers/employee/etc...
// still works and then perform tests on that page
describe('sponsor dashboard', function() {
    beforeAll(function() {
        utils.setBrowserSize();
        sponsor.get()
        utils.setActiveAccount()
        utils.setSelectedOrganizationId()
    });

    beforeEach(function() {
        dashboard.get()
    });

    it('goes to funds page', function() {
        dashboard.getFundsPage()
    });

    describe('funds page', function() {
        beforeEach(function() {
            dashboard.getFundsPage()
        });

        it('opens and closes fund settings', function() {
            funds.getFundSetting()
            funds.cancelFundSettings()
        });

        it('opens and closes add fund', function() {
            funds.addFund()
            funds.cancelAddFund()
        });
    });

    it('goes to vouchers page', function() {
        dashboard.getVouchersPage()
    });

    describe('vouchers page', function() {
        beforeEach(function() {
            dashboard.getVouchersPage()
        });

        it('opens and closes create voucher', function() {
            vouchers.createVoucher()
            vouchers.cancelCreateVoucher()
        });

        it('opens and closes upload CSV', function() {
            vouchers.uploadCSV()
            vouchers.closeUploadCSV()
        });
    });

    it('goes to product vouchers page', function() {
        dashboard.getProductVouchersPage()
    });

    describe('product vouchers page', function() {
        beforeEach(function() {
            dashboard.getProductVouchersPage()
        });
        it('opens and closes create voucher', function() {
            productVouchers.createProductVoucher()
            productVouchers.cancelCreateProductVoucher()
        });

        it('opens and closes upload CSV', function() {
            productVouchers.uploadProductCSV()
            productVouchers.closeUploadCSV()
        });
    });

    it('goes to transactions page', function() {
        dashboard.getProductVouchersPage()
    });

    describe('transactions page', function() {
        beforeEach(function() {
            dashboard.getTransactionsPage()
        });
    });

    it('goes to finances page', function() {
        dashboard.getProductVouchersPage()
    });

    describe('finances page', function() {
        beforeEach(function() {
            dashboard.getFinancialDashboard()
        });
    });

    it('goes to employees page', function() {
        dashboard.getEmployeesPage()
    });

    describe('employees', function() {
        beforeEach(function() {
            dashboard.getEmployeesPage()
        });

        it('opens and closes add employee modal', function() {
            employees.addEmployee()
            employees.closeAddEmployee()
        });

        it('should add and delete an employee', function() {
            employees.addEmployee()
            employees.emailInput.sendKeys('email@email.com');
            employees.confirmAddEmployee()
            expect(employees.employeesEmail.last().getText()).toBe('email@email.com')
            employees.deleteEmployee()
            expect(employees.employeesEmail.getText()).not.toContain('email@email.com')
        });
    });

    it('goes to providers page', function() {
        dashboard.getProviderPage()
    });

    describe('providers page', function() {
        beforeEach(function() {
            dashboard.getProviderPage()
        });
    });

    it('goes to requesters page', function() {
        dashboard.getRequesterPage()
    });

    describe('requesters page', function() {
        beforeEach(function() {
            dashboard.getRequesterPage()
        });

        it('opens and closes add single activation code', function() {
            requesters.generateActivationCode()
            requesters.closeGenerateActivationCode()
        });
    });
});