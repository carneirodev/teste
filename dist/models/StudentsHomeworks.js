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
var Homework_1 = __importDefault(require("./Homework"));
var User_1 = __importDefault(require("./User"));
var StudentHomework = /** @class */ (function () {
    function StudentHomework() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], StudentHomework.prototype, "student_homework_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StudentHomework.prototype, "homework_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Homework_1.default; }),
        typeorm_1.JoinColumn({ name: 'homework_id' }),
        __metadata("design:type", Homework_1.default)
    ], StudentHomework.prototype, "homework", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StudentHomework.prototype, "student_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }),
        typeorm_1.JoinColumn({ name: 'student_id' }),
        __metadata("design:type", User_1.default)
    ], StudentHomework.prototype, "student", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StudentHomework.prototype, "student_chapters", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StudentHomework.prototype, "student_text", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StudentHomework.prototype, "homework_status", void 0);
    StudentHomework = __decorate([
        typeorm_1.Entity('students_homeworks')
    ], StudentHomework);
    return StudentHomework;
}());
exports.default = StudentHomework;
