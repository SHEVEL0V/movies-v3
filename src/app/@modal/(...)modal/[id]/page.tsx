/** @format */
"use client";
import Image from "next/image";

import React, { useState } from "react";

import Modal from "@/components/modal";

export default function Banner() {
  return (
    <Modal>
      <Image src={"/"} height={500} width={500} alt="" />
    </Modal>
  );
}
