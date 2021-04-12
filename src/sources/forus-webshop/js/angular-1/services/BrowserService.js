let BrowserService = function() {
    let idleInterval = false;

    return new(function() {
        let idleTime;

        let resetIdleTime = function() {
            idleTime = 0;
            localStorage.setItem('lastAcivity', moment.now());
        };

        this.detectInactivity = function(seconds) {
            return new Promise((resolve, reject) => {
                if (idleInterval != false) {
                    reject();
                }

                let timerIncrement = function(increment = 0) {
                    if ((idleTime += increment) > seconds) {
                        clearInterval(idleInterval);
                        resetIdleTime();

                        angular.element(document).off('mousemove.activity');
                        angular.element(document).off('keypress.activity');

                        idleInterval = false;
                        localStorage.removeItem('lastAcivity');

                        resolve();
                    }
                };

                idleTime = 0;
                idleInterval = setInterval(() => timerIncrement(1000), 1000);

                if (!isNaN(parseInt(localStorage.getItem('lastAcivity')))) {
                    idleTime = moment.now() - parseInt(
                        localStorage.getItem('lastAcivity')
                    );
                }

                angular.element(document).on('mousemove.activity', () => resetIdleTime());
                angular.element(document).on('keypress.activity', () => resetIdleTime());

                timerIncrement(0);
            });
        };

        this.unsetInactivity = function () {
            clearInterval(idleInterval);
            resetIdleTime();

            angular.element(document).off('mousemove.activity');
            angular.element(document).off('keypress.activity');

            idleInterval = false;
            localStorage.removeItem('lastAcivity');
        };
    });
};

module.exports = [
    BrowserService
];