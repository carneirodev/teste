"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Rooms_1 = __importDefault(require("./Rooms"));
var User_1 = __importDefault(require("./User"));
var Homework = /** @class */ (function () {
    function Homework() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Homework.prototype, "homework_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Homework.prototype, "teacher_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }),
        typeorm_1.JoinColumn({ name: 'teacher_id' }),
        __metadata("design:type", User_1.default)
    ], Homework.prototype, "teacher", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Homework.prototype, "room_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Rooms_1.default; }),
        typeorm_1.JoinColumn({ name: 'room_id' }),
        __metadata("design:type", Rooms_1.default)
    ], Homework.prototype, "room", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Homework.prototype, "book_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Homework.prototype, "date", void 0);
    Homework = __decorate([
        typeorm_1.Entity('homeworks')
    ], Homework);
    return Homework;
}());
exports.default = Homework;
