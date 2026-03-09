import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) { }

  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOneBy({ id });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {

    const student = await this.studentRepository.findOneBy({ id });

    if (!student) {
      throw new Error("Student not found");
    }

    Object.assign(student, updateStudentDto);

    return this.studentRepository.save(student);
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}