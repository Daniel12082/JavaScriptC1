/*##########################################
#             Reto competitivo             #
############################################

*/

//Heco por Daniel felipe Diaz Sanchez
let projectCost = [363374326, 364147530, 61825163,

107306571, 128124602, 139946991, 428047635, 491595254, 879792181,

106926279];
let a2 = projectCost;
let target = 2;
let final = 0;
let size = a2.length;

const countPairs = () => {
    if ((size <= (10 ** 5)) && (size >= 5) && (target >= 1) && (target <= (10**9))) {
        let validInputs = true;

        for (let i = 0; i < size; i++) {
            if (projectCost[i] <= 0 || projectCost[i] > (2 * (10 ** 9))) {
                validInputs = false;
                break;
            }

            for (let j = i + 1; j < size; j++) {
                if (projectCost[i] === projectCost[j]) {
                    validInputs = false;
                    break;
                }
            }

            if (!validInputs) {
                break;
            }
        }

        if (validInputs) {
            for (let i = 0; i < projectCost.length; i++) {
                for (let j = 0; j < a2.length; j++) {
                    if ((projectCost[i] - a2[j]) === target) {
                        final = final + 1;
                    }
                }
            }
        }
    }
};

countPairs();

console.log(final);

