"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimumNumber = (numbers) => {
    let minNum;
    for (let index = 0; index < numbers.length; index++) {
        if (minNum === undefined) {
            minNum = numbers[index];
        }
        else {
            minNum = numbers[index] < minNum ? numbers[index] : minNum;
        }
    }
    return minNum;
};
exports.default = minimumNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzaWMtcHJvYmxlbS9taW5pbXVtLW51bWJlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBaUIsRUFBc0IsRUFBRTtJQUM1RCxJQUFJLE1BQU0sQ0FBQztJQUNYLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2pELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QixNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDSCxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDOUQ7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQyJ9