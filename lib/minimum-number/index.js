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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmFuZG9tLXByb2JsZW0vbWluaW11bS1udW1iZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQWlCLEVBQXNCLEVBQUU7SUFDNUQsSUFBSSxNQUFNLENBQUM7SUFDWCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0gsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzlEO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixrQkFBZSxhQUFhLENBQUMifQ==