import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Método de Login
  login(user: User): UserToken {
    // Transforma o user em um JWT
    const payload: UserPayload = { // Criando o Payload
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    // Gerando o Token JWT
    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    }
  }

  // Método de validateUser
  async validateUser(email: string, password: string) {
    // Buscando o usuário no userService
    const user = await this.userService.findByEmail(email);

    // Verificando se encontrou o usuário
    if (user) {
      // Chegar se a senha informada corresponde a hash que está no banco

      // Comparando a senha criptografaga com a senha do usuário
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // Chegando se a senha é válida
      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    // Se chegar aqui, significa que não encontrou um user e/ou senha não corresponde
    throw new Error(
      'E-mail ou senha estão incorretos, favor verificar e tente novamente!',
    );
  }
}
