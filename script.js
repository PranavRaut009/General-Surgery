const questions = [
    
  {
    question: "What is surgical bandaging?",
    answers: [
      { text: "The process of using adhesive tape to close a wound", correct: false },
      { text: "The process of wrapping a surgical site with sterile dressings ", correct: true },
      { text: "The process of applying a cast to a broken bone ", correct: false },
      { text: " The process of suturing a wound ", correct: false },
      { text: "The process of cleaning a surgical site with antiseptic solution ", correct: false },
    ],
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the wrist or hand? ",
    answers: [
      { text: "Hand bandage ", correct: false },
      { text: "Wrist bandage ", correct: true },
      { text: "Finger bandage ", correct: false },
      { text: " Arm bandage", correct: false },
      { text: "Elbow bandage", correct: false },
    ],
  },
  {
    question: "What is the term for the process of applying a dressing to a surgical wound? ",
    answers: [
      { text: "Dressing application ", correct: true },
      { text: "Wound closure ", correct: false },
      { text: "Wound debridement ", correct: false },
      { text: "Wound irrigation ", correct: false },
      { text: "Wound packing ", correct: false },
    ],
  },
  {
    question: "Which of the following is a common type of padding used for surgical bandaging? ",
    answers: [
      { text: " Cotton balls ", correct: false },
      { text: "Foam pads ", correct: false },
      { text: "Sponge pads ", correct: false },
      { text: "Gauze pads", correct: false },
      { text: "All of the above ", correct: true },
    ],
  },
  {
    question: "What is the term for the process of ensuring that a surgical bandage is tight enough to be secure, but not so tight as to restrict blood flow? ",
    answers: [
      { text: "Tensioning ", correct: true },
      { text: "Tightening ", correct: false },
      { text: "Loosening ", correct: false },
      { text: "Adjusting ", correct: false },
      { text: "Securing ", correct: false },
    ],
  },

  {
    question: "Which of the following is a common type of surgical adhesive?",
    answers: [
      { text: "Duct tape ", correct: false },
      { text: "Electrical tape ", correct: false },
      { text: "Medical tape ", correct: true },
      { text: "Masking tape ", correct: false },
      { text: "Packing tape ", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of surgical dressing?",
    answers: [
      { text: "Band-Aid ", correct: false },
      { text: "Gauze ", correct: true },
      { text: "Adhesive tape ", correct: false },
      { text: "Elastic bandage ", correct: false },
      { text: "Splint ", correct: false}
    ]
  },
  {
    question: "Which of the following is a common material used for surgical bandages? ",
    answers: [
      { text: " Cotton ", correct: true },
      { text: "Polyester ", correct: false },
      { text: "Nylon ", correct: false},
      { text: "Rayon ", correct: false },
      { text: "Silk ", correct: false }
    ]
  },
  {
    question: "What is the term for the type of bandage that is used to hold a dressing in place on the foot or ankle?  ",
    answers: [
      { text: "Foot bandage", correct: false },
      { text: "Ankle bandage ", correct: true},
      { text: "Toe bandage  ", correct: false },
      { text: "Leg bandage ", correct: false },
      { text: " Knee bandage  ", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of dressing used for surgical wounds? ",
    answers: [
      { text: " Hydrocolloid dressing ", correct: false },
      { text: "Alginate dressing ", correct: false },
      { text: "Foam dressing", correct: false },
      { text: " Transparent film dressing ", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "What is the term for the type of bandage that is used to hold a dressing in place on the shoulder or upper arm? ",
    answers: [
      { text: "Shoulder bandage ", correct: false },
      { text: "Arm bandage ", correct: false },
      { text: " Elbow bandage ", correct: false },
      { text: "Clavicle bandage ", correct: true },
      { text: "Biceps bandage ", correct: false}
    ]
  },
  {
    question: "What is the term for the type of bandage that is used to hold a dressing in place on the lower leg or calf? ",
    answers: [
      { text: "Calf bandage ", correct: false },
      { text: " Shin bandage ", correct: true},
      { text: "Knee bandage", correct: false },
      { text: " Ankle bandage", correct: false },
      { text: "Achilles bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of wound that may require surgical bandaging? ",
    answers: [
      { text: "Bruise ", correct: false },
      { text: "Burn", correct: false },
      { text: "Abrasion ", correct: false },
      { text: "Laceration ", correct: false },
      { text: "All of the above ", correct: true}
    ]
  },
  {
    question: "What is the term for the process of applying a surgical bandage to a wound? ",
    answers: [
      { text: "Dressing", correct: false },
      { text: "Wrapping ", correct: true },
      { text: "Binding ", correct: false },
      { text: "Securing", correct: false },
      { text: "Taping", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of material used for surgical dressings?",
    answers: [
      { text: "Plastic ", correct: false },
      { text: " Cotton ", correct: true },
      { text: "Leather ", correct: false },
      { text: " Metal ", correct: false },
      { text: " Rubber ", correct:false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the eye? ",
    answers: [
      { text: " Eye patch ", correct: true },
      { text: " Eyelid bandage ", correct: false },
      { text: "Eye cover ", correct: false},
      { text: "Eye wrap ", correct: false },
      { text: " Eye shield", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of dressing used for surgical bandaging? ",
    answers: [
      { text: "Hydrogel ", correct: false },
      { text: "Adhesive", correct: false },
      { text: "Antibacterial", correct: false },
      { text: "Non-stick ", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is a common type of dressing used in surgical bandaging? ",
    answers: [
      { text: "Cast ", correct: false },
      { text: "Splint ", correct: false },
      { text: " Sterile gauze ", correct: true },
      { text: "Elastic bandage ", correct: false},
      { text: "Adhesive tape ", correct: false }
    ]
  },
  {
    question: "20. What is the name for the type of bandage that is used to hold a dressing in place on the foot or ankle?",
    answers: [
      { text: "Foot bandage ", correct: false },
      { text: "Ankle bandage ", correct: true},
      { text: "Toe bandage ", correct: false },
      { text: "Leg bandage", correct: false },
      { text: "Knee bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of wound that may require a compression bandage? ",
    answers: [
      { text: "Burn ", correct: false },
      { text: " Bruise ", correct: false },
      { text: "Cut ", correct: false },
      { text: "Sprain ", correct: true },
      { text: " Allergic reaction  ", correct: false }
    ]
  },
  {
    question: "What is the purpose of surgical bandaging? ",
    answers: [
      { text: "To prevent infection ", correct: false },
      { text: " To provide support to a surgical site", correct: false },
      { text: "To control bleeding ", correct: false },
      { text: "To promote healing ", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "What is the term for a type of bandage that is used to provide compression to a body part, such as the ankle or wrist? ",
    answers: [
      { text: "Elastic bandage ", correct: true },
      { text: "Figure-eight bandage ", correct: false },
      { text: "Spiral bandage ", correct: false },
      { text: "Circular bandage ", correct: false },
      { text: "Recurrent bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the head or neck?",
    answers: [
      { text: "Head bandage ", correct: true },
      { text: "Neck bandage", correct: false },
      { text: " Ear bandage ", correct: false },
      { text: " Eye bandage ", correct: false },
      { text: "Chin bandage ", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of adhesive used for surgical bandaging? ",
    answers: [
      { text: "Super glue ", correct: false },
      { text: "Hot glue", correct: false },
      { text: "Medical tape n", correct: true },
      { text: "Rubber cement ", correct: false },
      { text: "Contact cement ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of removing a surgical bandage? ",
    answers: [
      { text: "Unrolling ", correct: false },
      { text: "Unpacking", correct: false },
      { text: " Unwrapping ", correct: true },
      { text: "Unbinding", correct: false },
      { text: "Unveiling ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the chest or abdomen? ",
    answers: [
      { text: "Chest bandages", correct: false },
      { text: "Thoracic bandage", correct: false },
      { text: "Abdominal bandage",correct : true },
      { text: "Gastric bandage ", correct: false },
      { text: " Cardiac bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the thigh or hip? ",
    answers: [
      { text: "Thigh bandage ", correct: true },
      { text: " Hip bandage", correct:false },
      { text: "Knee bandage ", correct: false },
      { text: "THamstring bandage ", correct: false },
      { text: "Quadriceps bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of tape used for surgical bandaging? ",
    answers: [
      { text: "Duct tape ", correct: false },
      { text: " Electrical tape ", correct: false },
      { text: "Masking tape", correct: false },
      { text: "Medical tape ", correct: true },
      { text: "Packing tape ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the forearm or wrist? ",
    answers: [
      { text: "Forearm bandage ", correct: true },
      { text: "Wrist bandage ", correct: false },
      { text: " Hand bandage ", correct: false },
      { text: " Finger bandage ", correct: false },
      { text: " Knee bandage ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the chest or abdomen? ",
    answers: [
      { text: "Chest bandage ", correct: false },
      { text: " Abdominal bandage ", correct: true },
      { text: " Breast bandage", correct: false },
      { text: "Shoulder bandage ", correct: false },
      { text: " Back bandage ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the knee or elbow? ",
    answers: [
      { text: " Knee bandage", correct: true },
      { text: "Elbow bandage ", correct: false },
      { text: " Arm bandage ", correct: false },
      { text: "Leg bandage ", correct: false },
      { text: "Shoulder bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the hand or fingers? ",
    answers: [
      { text: "Hand bandage ", correct: false },
      { text: "Finger bandage ", correct: true },
      { text: "Wrist bandage", correct: false },
      { text: "Arm bandage ", correct: false },
      { text: "Elbow bandage ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the shoulder? ",
    answers: [
      { text: "Shoulder bandage ", correct: true },
      { text: "Arm bandage ", correct: false },
      { text: "Back bandage", correct: false },
      { text: "Neck bandage", correct: false },
      { text: "Chest bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to secure a dressing in place on the chest? ",
    answers: [
      { text: "Chest bandage ", correct: false },
      { text: "H Breast bandage ", correct: false },
      { text: "Torso bandage", correct: false },
      { text: "Abdominal bandage ", correct: true},
      { text: "Shoulder bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of wound that requires surgical bandaging?",
    answers: [
      { text: "Bruise ", correct: false },
      { text: "Cut ", correct: true },
      { text: "Rash", correct: false },
      { text: "Sunburn ", correct: false },
      { text: "Allergic reaction ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the elbow or forearm? ",
    answers: [
      { text: "Elbow bandage ", correct: false },
      { text: "Arm bandage ", correct: true },
      { text: "Hand bandage ", correct: false },
      { text: " Wrist bandage ", correct: false },
      { text: "Finger bandage", correct:false }
    ]
  },
  {
    question: "What is the term for the process of applying a surgical bandage? ",
    answers: [
      { text: " Wrapping ", correct: true },
      { text: " Rolling ", correct: false },
      { text: "Packing ", correct: false },
      { text: " Binding ", correct: false },
      { text: "Covering", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the thigh or knee? ",
    answers: [
      { text: "Knee bandage ", correct: true },
      { text: "Leg bandage ", correct: false },
      { text: "Ankle bandage ", correct: false },
      { text: "Foot bandage ", correct: false },
      { text: "Foot bandage ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of reducing the number of microorganisms on a surface or object? ",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection", correct: true },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization ", correct: false },
      { text: " Cleaning ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a critical item in the surgical field? ",
    answers: [
      { text: " The surgical table ", correct: false },
      { text: " Surgical instruments ", correct: true },
      { text: " Surgical drapes ", correct: false },
      { text: "The surgical room's walls ", correct: false},
      { text: "The surgical team's shoes ", correct: false }
    ]
  },
  {
    question: "44. Which of the following is an example of a commonly used disinfectant for cleaning surgical instruments?",
    answers: [
      { text: "Sterilization ", correct: true },
      { text: "Disinfection ", correct: false },
      { text: " Antisepsis", correct: false },
      { text: "Sanitization", correct: false },
      { text: " Cleaning ", correct: false }
    ]
  },
  {
    question: "In clinical occupational health practice, why is understanding existing work restrictions or accommodations important?",
    answers: [
      { text: " Bleach ", correct: false },
      { text: "Alcohol ", correct: false },
      { text: " Betadine ", correct: false },
      { text: "Hydrogen peroxide", correct: false },
      { text: "Glutaraldehyde ", correct: true }
    ]
  },
  {
    question: "45. Which of the following is an example of a type of shoe cover that is worn by surgical team members during surgical procedures? ",
    answers: [
      { text: "Sandals", correct: false },
      { text: "Sneakers ", correct: false },
      { text: " Boots ", correct: false },
      { text: "Disposable shoe covers ",correct: true },
      { text: " All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a method for preventing the development of antimicrobial resistance?",
    answers: [
      { text: "Proper hand hygiene", correct: true },
      { text: "Overuse of antibiotics", correct: false },
      { text: "Use of broad-spectrum antibiotics ", correct: false },
      { text: "Use of antibiotics for viral infections ", correct: false },
      { text: "TNone of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a sterile item that should be used only once and then discarded?",
    answers: [
      { text: "Scalpel blade", correct: true },
      { text: "Forceps", correct: false },
      { text: "Scissors ", correct: false },
      { text: "Needle holder ", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a type of surgical site infection that occurs throughout the body and can be life-threatening? ",
    answers: [
      { text: "Superficial incisional", correct: false },
      { text: "Deep incisional", correct: false },
      { text: "Organ/space", correct: false },
      { text: "Systemic", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of mask that is worn by surgical team members during surgical procedures? ",
    answers: [
      { text: "Cloth mask", correct: false },
      { text: "N95 respirator ", correct: false },
      { text: "Surgical mask ", correct: true },
      { text: "Gas mask", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can increase the risk of surgical fires? ",
    answers: [
      { text: "Use of alcohol-based skin preparations", correct: false },
      { text: "Use of oxygen-enriched atmospheres", correct: false },
      { text: "Use of laser devices", correct: false },
      { text: "Use of electrocautery devices", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical smoke that can be produced during surgical procedures?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "• Water vapor ", correct: false },
      { text: "None of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of hazard associated with the use of electrosurgical devices? ",
    answers: [
      { text: "Burns", correct: false },
      { text: "Electrocution", correct: false },
      { text: "Explosion", correct: false },
      { text: "Fire", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: " Which of the following is an example of a method for reducing the risk of hazards associated with electrosurgical devices?",
    answers: [
      { text: "Proper grounding and insulation of the device ", correct: false },
      { text: "Use of bipolar cautery instead of monopolar cautery", correct: false },
      { text: "Use of non-flammable skin preparations", correct: false },
      { text: "Use of non-combustible drapes ", correct: false },
      { text: "• All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a method for reducing the risk of hazards associated with laser devices?",
    answers: [
      { text: "Proper training and certification of operators ", correct: false },
      { text: "Use of non-reflective materials in the surgical field", correct: false },
      { text: "Proper use of protective eyewear", correct: false },
      { text: "Use of smoke evacuators", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a physical method of sterilization?",
    answers: [
      { text: "Autoclaving ", correct: true },
      { text: "Gas sterilization", correct: false },
      { text: " Ethylene oxide sterilization ", correct: false },
      { text: "Cold sterilization", correct: false },
      { text: "Chemical sterilization", correct: false }
    ]
  },
  {
    question: "What is asepsis? ",
    answers: [
      { text: "The study of microorganisms ", correct: false },
      { text: "The process of sterilizing instruments ", correct: false },
      { text: "The absence of microorganisms", correct: true },
      { text: "The use of antibiotics", correct: false },
      { text: "The process of cleaning surgical instruments", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique? ",
    answers: [
      { text: "Cleaning the surgical room with bleach ", correct: false },
      { text: "Wiping down the surgical table with alcohol", correct: false },
      { text: "Using a sterile surgical gown and gloves", correct: true },
      { text: " Wearing regular clothing during surgery ", correct: false},
      { text: " Rinsing surgical instruments in tap water", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a sterile item in the surgical field? ?",
    answers: [
      { text: "Non-sterile surgical gloves", correct: false },
      { text: "Non-sterile gauze ", correct: false },
      { text: "Sterile surgical instruments", correct: true },
      { text: "Non-sterile surgical gown ", correct: false },
      { text: "Non-sterile drapes ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of an antiseptic? ",
    answers: [
      { text: "Alcohol", correct: true },
      { text: "Bleach", correct: false },
      { text: "Soap and water ", correct: false },
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Ammonia ", correct: false }
    ]
  },
  {
    question: ". What is the term for the process of killing or eliminating microorganisms on living tissue?",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Antisepsis", correct: true },
      { text: "Sanitization", correct: false },
      { text: "Cleaning ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a non-sterile field?",
    answers: [
      { text: "The surgical team's clothing", correct: false },
      { text: "TThe surgical team's shoes", correct: false },
      { text: "The surgical table", correct: false },
      { text: "The surgical room's walls ", correct: true },
      { text: "The surgical room's ceiling", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique that should be used during surgery?",
    answers: [
      { text: "Wearing non-sterile clothing", correct: false },
      { text: " Using non-sterile surgical instruments ", correct: false },
      { text: "Wiping down the surgical table with tap water", correct: false },
      { text: "Using a sterile surgical gown and gloves ", correct: true },
      { text: "Rinsing surgical instruments with bleach", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a non-critical item in the surgical field?",
    answers: [
      { text: "Surgical instruments", correct: false },
      { text: "TSurgical drapes", correct: false },
      { text: "The surgical table", correct: false },
      { text: "The surgical room's walls", correct: true },
      { text: "The surgical room's ceiling ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a semi-critical item in the surgical field? ",
    answers: [
      { text: "The surgical table ", correct: false },
      { text: "Surgical instruments ", correct: false },
      { text: "Surgical drapes", correct: true },
      { text: "The surgical room's walls ", correct: false },
      { text: "The surgical team's clothing", correct: false }
    ]
  },
  {
    question: "What is the term for the process of removing dirt and debris from a surface or object? ",
    answers: [
      { text: "TSterilization", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Sanitization", correct: false },
      { text: "Cleaning", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a sterile prep solution? ",
    answers: [
      { text: "Bleach", correct: false },
      { text: "Alcohol", correct: false },
      { text: " Soap and water", correct: false },
      { text: "Hydrogen ", correct: false },
      { text: "Betadine", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a biological indicator used to test the efficacy of a sterilization process?",
    answers: [
      { text: "Sterilization tape", correct: false },
      { text: "Chemical indicators", correct: false },
      { text: "Heat-sensitive indicators", correct: false },
      { text: "Spore strips", correct: true },
      { text: "Autoclave bags", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a common type of surgical site infection?",
    answers: [
      { text: "Urinary tract infection", correct: false },
      { text: "Pneumonia ", correct: false },
      { text: "Meningitis ", correct: false },
      { text: "Endocarditis ", correct: false },
      { text: "Surgical wound infection", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical site infection caused by bacteria commonly found in the hospital environment?",
    answers: [
      { text: " MRSA infection", correct: false },
      { text: "VRE infection ", correct: false },
      { text: "Pseudomonas infection ", correct: true },
      { text: "Staphylococcus aureus infection ", correct: false },
      { text: "Streptococcus infection", correct: false }
    ]
  },
  {
    question: "What is the primary goal of aseptic technique in surgery? ",
    answers: [
      { text: "To minimize the risk of infection ", correct: true },
      { text: "To maximize patient comfort", correct: false },
      { text: "To minimize the use of antibiotics", correct: false },
      { text: "To increase surgical speed", correct: false },
      { text: "To minimize surgical costs ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a non-sterile item in the surgical field?",
    answers: [
      { text: "Sterile gauze ", correct: false },
      { text: "Sterile drapes", correct: false },
      { text: " Sterile surgical instruments", correct: false },
      { text: "Non-sterile surgical gloves", correct: true },
      { text: " Sterile surgical gown ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of eliminating all microorganisms from a surface or object?",
    answers: [
      { text: "Sterilization", correct: true },
      { text: " Disinfection", correct: false },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization ", correct: false },
      { text: "Cleaning", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical site infection?",
    answers: [
      { text: "Pneumonia ", correct: false },
      { text: "Blood clot ", correct: false },
      { text: "Kidney failure", correct: false },
      { text: " Urinary tract infection", correct: false },
      { text: "Wound infection", correct: true }
    ]
  },
  {
    question: "WWhich of the following is an example of a sterile field?",
    answers: [
      { text: "The surgical team's shoes", correct: false },
      { text: "The surgical team's clothing", correct: false },
      { text: "The surgical table", correct: true },
      { text: "The surgical room's walls", correct: false },
      { text: "The surgical room's ceiling", correct: false }
    ]
  },
  {
    question: "Which of the following is the most effective way to reduce the risk of surgical site infections?",
    answers: [
      { text: "Using sterile surgical instruments ", correct: true },
      { text: "Administering antibiotics after surgery ", correct: false },
      { text: " Wearing clean clothing during surgery ", correct: false },
      { text: "Cleaning the surgical room with disinfectant ", correct: false },
      { text: "Minimizing the length of surgery", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a barrier method used to maintain a sterile field?",
    answers: [
      { text: "Wearing non-sterile clothing ", correct: false },
      { text: "Wearing sterile surgical gloves ", correct: true },
      { text: "Using non-sterile surgical instruments", correct: false },
      { text: "Using non-sterile drapes", correct: false },
      { text: "Wiping down the surgical table with tap water", correct: false }
    ]
  },
  {
    question: "What is the term for the process of reducing the number of microorganisms on non-living surfaces?",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection ", correct: true },
      { text: "Antisepsis ", correct: false },
      { text: "Sanitization ", correct: false },
      { text: "Cleaning ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a high-level disinfectant?",
    answers: [
      { text: "Soap and water ", correct: false },
      { text: "Alcohol ", correct: false },
      { text: "Bleach ", correct: false },
      { text: "Hydrogen peroxide", correct: true },
      { text: "PAmmonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a low-level disinfectant?",
    answers: [
      { text: "Soap and water", correct: true },
      { text: "Alcohol ", correct: false },
      { text: "Bleach", correct: false },
      { text: "Hydrogen peroxide", correct: false },
      { text: " Ammonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique that should be used when preparing a surgical site?",
    answers: [
      { text: "Using non-sterile surgical instruments ", correct: false },
      { text: "Wearing non-sterile clothing", correct: false },
      { text: "Using non-sterile drapes", correct: false },
      { text: "Wiping down the surgical site with tap water", correct: false },
      { text: "Using a sterile surgical prep solution ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for surgical hand hygiene? ",
    answers: [
      { text: "Bleach", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Betadine", correct: false },
      { text: "Hydrogen peroxide", correct: false },
      { text: "Ammonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a chemical method of sterilization?",
    answers: [
      { text: "Autoclaving", correct: false },
      { text: "Gas sterilization", correct: false },
      { text: "Ethylene oxide sterilization", correct: true },
      { text: "Cold sterilization", correct: false },
      { text: "AChemical sterilization", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a chemical indicator used to test the efficacy of a sterilization process? ",
    answers: [
      { text: "Sterilization tape", correct: true },
      { text: " Biological indicators", correct: false },
      { text: "Heat-sensitive indicators ", correct: false },
      { text: "Spore strips ", correct: false },
      { text: "Autoclave bags ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of preventing the introduction of microorganisms into a sterile field?",
    answers: [
      { text: "Sterilization", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization", correct: false },
      { text: "Asepsis", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique that should be used during a surgical procedure? ",
    answers: [
      { text: "Talking on the phone during surgery ", correct: false },
      { text: "Wearing non-sterile clothing", correct: false },
      { text: "Touching non-sterile surface", correct: false },
      { text: "Limiting movement in and out of the surgical area", correct: true },
      { text: "Using non-sterile surgical instruments", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that increases the risk of surgical site infections?",
    answers: [
      { text: "Short surgery time ", correct: false },
      { text: "Proper use of antibiotics", correct: false },
      { text: "Proper hand hygiene by the surgical team ", correct: false },
      { text: "Poor nutritional status of the patient ", correct: true },
      { text: "Minimal blood loss during surgery", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical site infection caused by bacteria commonly found on the patient's skin?",
    answers: [
      { text: "MRSA infection ", correct: false },
      { text: "VRE infection", correct: false },
      { text: "Pseudomonas infection ", correct: false },
      { text: "Staphylococcus aureus infection ", correct: true },
      { text: "Streptococcus infection", correct: false }
    ]
  },
  {
    question: "What is the term for the process of removing dirt, debris, and other visible contaminants from a surface or object?",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization", correct: false },
      { text: "Cleaning", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used disinfectant for cleaning surfaces in the surgical environment? ",
    answers: [
      { text: "Bleach", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Betadine", correct: false },
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Ammonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical site infection that occurs in the subcutaneous tissues and muscles?",
    answers: [
      { text: "Superficial incisional", correct: false },
      { text: "Deep incisional", correct: true },
      { text: "POrgan/space ", correct: false },
      { text: "Systemic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a type of surgical site infection that occurs in organs or spaces that are manipulated during the surgical procedure? ",
    answers: [
      { text: "Superficial incisional", correct: false },
      { text: "Deep incisional ", correct: false },
      { text: "Organ/space", correct: true },
      { text: "Systemic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can increase the risk of surgical site infections?",
    answers: [
      { text: "Obesity", correct: false },
      { text: "Age", correct: false },
      { text: "Immunosuppression", correct: true },
      { text: "Diabetes", correct: false },
      { text: " All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for reducing the risk of surgical site infections?",
    answers: [
      { text: "Proper hand hygiene ", correct: false },
      { text: " Sterilization of surgical instruments", correct: false },
      { text: "Use of prophylactic antibiotics", correct: false },
      { text: " Use of sterile drapes and gowns ", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of glove that is worn by surgical team members during surgical procedures?",
    answers: [
      { text: "Latex", correct: false },
      { text: "Vinyl", correct: false },
      { text: "Nitrile", correct: true },
      { text: "Neoprene", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: ". Which of the following is an example of a type of gown that is worn by surgical team members during surgical procedures? .",
    answers: [
      { text: "Cloth gown", correct: false },
      { text: "Disposable gown ", correct: false },
      { text: "Isolation gown", correct: false },
      { text: "Sterile gown ", correct: true },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of cap that is worn by surgical team members during surgical procedures? ",
    answers: [
      { text: "Baseball cap ", correct: false },
      { text: " Scrub cap ", correct: true },
      { text: "Chef's hat ", correct: false },
      { text: "Cowboy hat ", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a type of cap that is worn by surgical team members during surgical procedures?",
    answers: [
      { text: "Baseball cap ", correct: false },
      { text: "Scrub cap ", correct: true },
      { text: "Chef's hat ", correct: false },
      { text: "Cowboy hat", correct: false },
      { text: "IAll of the above",correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing surgical fires?",
    answers: [
      { text: "Use of non-flammable skin preparations ", correct: false },
      { text: "Use of non-combustible drapes", correct: false },
      { text: "Minimizing the use of oxygen-enriched atmospheres ", correct: false },
      { text: "Use of fire-retardant materials", correct: false },
      { text: "IAll of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a hazard associated with surgical smoke?",
    answers: [
      { text: "Eye irritation", correct: false },
      { text: "Skin irritation", correct: false },
      { text: "All of the above ", correct: true },
      { text: "Respiratory irritation", correct: false },
      { text: "Increased risk of infection", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for reducing the risk of surgical smoke hazards? ",
    answers: [
      { text: "Use of smoke evacuators  ", correct: false },
      { text: "All of the above", correct: true },
      { text: "Use of respiratory protection ", correct: false },
      { text: " Minimizing the use of energy devices ", correct: false },
      { text: "Use of local exhaust ventilation ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of hazard associated with the use of laser devices? ",
    answers: [
      { text: "Electrocution", correct: false },
      { text: "Explosion", correct: false },
      { text: "Fire", correct: false },
      { text: "Burns", correct: true },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of microorganism that can be killed by an antiseptic?",
    answers: [
      { text: "Bacteria", correct: false },
      { text: "All of the above", correct: true },
      { text: "Fungi", correct: false },
      { text: "Viruses",correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for evaluating the effectiveness of an antiseptic??",
    answers: [
      { text: "Swabbing the skin with a sterile sponge ", correct: false },
      { text: "Culture testing", correct: true },
      { text: "PMeasuring the pH of the solution ", correct: false },
      { text: "Measuring the concentration of the solution ", correct: false },
      { text: "HNone of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a commonly used antiseptic for skin preparation prior to an injection?",
    answers: [
      { text: "Betadine", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Chlorhexidine", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a commonly used antiseptic for wound care? ",
    answers: [
      { text: "Chlorhexidine", correct: false },
      { text: "H Hydrogen peroxide", correct: false },
      { text: " Formaldehyde", correct: false },
      { text: "Betadine", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the proper use of an antiseptic solution? ",
    answers: [
      { text: "Reading the manufacturer's instructions ", correct: false },
      { text: "All of the above ", correct: true },
      { text: "Using a sterile technique ", correct: false },
      { text: "Wearing personal protective equipment", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing the development of resistance to an antiseptic solution?",
    answers: [
      { text: "Using the same antiseptic solution for all patients ", correct: false },
      { text: "Using a high concentration of the antiseptic solutio", correct: false },
      { text: "Alternating the use of different antiseptic solutions ", correct: true },
      { text: "None of the above", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is the primary goal of antisepsis?",
    answers: [
      { text: "• Killing all microorganisms", correct: false },
      { text: "Reducing the number of microorganisms to a safe level", correct: true },
      { text: "Inhibiting the growth of microorganisms ", correct: false },
      { text: " Removing all microorganisms from a surface ", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a factor that can affect the effectiveness of an antiseptic?",
    answers: [
      { text: "Duration of exposure ", correct: false },
      { text: "Concentration of the antiseptic", correct: false },
      { text: "Temperature of the solution", correct: false },
      { text: "All of the above", correct: true },
      { text: "pH of the solution", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of antiseptic that can be used to prepare the skin before surgery?",
    answers: [
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Bleach", correct: false },
      { text: "Vinegar", correct: false },
      { text: "Betadine", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for minimizing the risk of allergic reactions to an antiseptic?",
    answers: [
      { text: "Using a low concentration of the antiseptic", correct: false },
      { text: "Using a different type of antiseptic", correct: false },
      { text: "Using a high concentration of the antiseptic ", correct: false },
      { text: "Performing a skin patch test before use ", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of an antiseptic that can be used to clean medical instruments?",
    answers: [
      { text: "Vinegar", correct: false },
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Bleach", correct: true },
      { text: "Betadine ", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the speed of the action of an antiseptic?",
    answers: [
      { text: "The concentration of the antiseptic ", correct: false },
      { text: "The temperature of the antiseptic", correct: false },
      { text: "All of the above ", correct: true },
      { text: "The type of microorganism ", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the toxicity of an antiseptic?",
    answers: [
      { text: "Concentration of the antiseptic", correct: false },
      { text: "Duration of exposure to the antiseptic ", correct: false },
      { text: "All of the above", correct: true },
      { text: "Type of microorganism present", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a method for storing an antiseptic solution? ",
    answers: [
      { text: "Keeping it in direct sunlight", correct: false },
      { text: "Keeping it at room temperature ", correct: false },
      { text: "Keeping it in a sealed container", correct: true },
      { text: "None of the above ", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for wound care?",
    answers: [
      { text: "Chlorine gas ", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "Ethylene oxide", correct: false },
      { text: "Hydrogen peroxide", correct: true },
      { text: "Ethylene oxide", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a potential complication of using an antiseptic solution?",
    answers: [
      { text: "Tissue damage ", correct: false },
      { text: "Allergic reaction", correct: false },
      { text: "All of the above ", correct: true },
      { text: "Resistance development ", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the choice of antiseptic for  particular application?",
    answers: [
      { text: "The type of microorganism present", correct: false },
      { text: "All of the above ", correct: true },
      { text: "The concentration of the antiseptic", correct: false },
      { text: " The duration of exposure to the antiseptic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the efficacy of an antiseptic?",
    answers: [
      { text: "The color of the antiseptic ", correct: false },
      { text: " The pH of the solution", correct: false },
      { text: " None of the above ", correct: false },
      { text: "CThe presence of organic material", correct: true },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a commonly used antiseptic for disinfecting medical equipment?",
    answers: [
      { text: "Chlorine gas", correct: false },
      { text: "Betadine ", correct: false },
      { text: "Formaldehyde ", correct: false },
      { text: "Glutaraldehyde", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the proper dilution of an antiseptic solution?",
    answers: [
      { text: "Using a color indicator", correct: false },
      { text: "Using a pH meter ", correct: false },
      { text: "Measuring the solution by volume", correct: true },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Stages of the postoperative period",
    answers: [
      { text: "eaarly, remote", correct: false },
      { text: "late, remote ", correct: false },
      { text: "early, late, remote ", correct: true },
      { text: "prehospital, hospital", correct: false },
      { text: "hospital, rehabilitation", correct: false }
    ]
  },
            
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();