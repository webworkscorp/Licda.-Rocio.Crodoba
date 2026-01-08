
import React from 'react';
import { PracticeArea, NavItem, LegalService } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Áreas de Práctica', href: '#areas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: 'Derecho de Familia',
    description: 'Acompañamiento sensible y firme en divorcios, pensiones y procesos familiares complejos.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Derecho Laboral',
    description: 'Protección de derechos tanto para empleadores como trabajadores con visión estratégica.',
    icon: 'Briefcase',
  },
  {
    title: 'Cobro Judicial y Deudas',
    description: 'Gestión eficiente de procesos de cobro y defensa ante situaciones de sobreendeudamiento.',
    icon: 'Scale',
  },
  {
    title: 'Derecho Civil',
    description: 'Contratos, responsabilidad civil y litigios de orden privado con rigor técnico.',
    icon: 'FileText',
  },
  {
    title: 'Remates',
    description: 'Asesoría especializada en remates de casas y vehículos, asegurando su inversión.',
    icon: 'Gavel',
  },
  {
    title: 'Servicios Notariales',
    description: 'Traspasos, cancelaciones de hipotecas y fe pública con absoluta seguridad jurídica.',
    icon: 'PenTool',
  },
];

export const SERVICES: LegalService[] = [
  {
    title: 'Asesoría Especializada',
    details: [
      'Materia laboral, familiar y civil',
      'Atención virtual y presencial',
      'Acompañamiento en mediaciones',
    ],
  },
  {
    title: 'Gestión de Deudas',
    details: [
      'Cobro judicial integral',
      'Defensa de deudores',
      'Arreglos de pago extrajudiciales',
    ],
  },
  {
    title: 'Servicios Notariales',
    details: [
      'Traspasos de vehículos y bienes inmuebles',
      'Cancelaciones de prendas e hipotecas',
      'Testamentos y actos notariales generales',
    ],
  },
  {
    title: 'Trámites Migratorios',
    details: [
      'Citas de migración',
      'Información de requisitos legales',
      'Residencias y permisos especiales',
    ],
  },
];
