# Locksmith
# 🔐 Locksmith – Smart & Playful Password Strength Checker

**Locksmith** is a sleek, browser-based password strength checker that evaluates how secure your password is in real time — and tells you how to make it stronger. With a clean UI and fun, techy feedback, Locksmith helps users "unlock" better password habits. 🧠🔑

---

## 🚀 Features

- Real-time **password strength evaluation**
- Score out of 9 based on:
  - Length (8, 12, 16, 20+ characters)
  - Uppercase & lowercase letters
  - Numbers & special characters
- Clear, color-coded feedback:
  - 🔴 Very Weak → 🟢 Very Strong
- Friendly **suggestions for improvement**
- 100% client-side — **no data sent or stored**

---

## 🔍 How It Works

Locksmith scores your password based on:
1. **Length** (more points for longer passwords)
2. **Character types**:
   - Uppercase (`A–Z`)
   - Lowercase (`a–z`)
   - Numbers (`0–9`)
   - Special characters (`!@#$%^&*`, etc.)
3. Bonus point for using *all* character types

### 🔢 Scoring Breakdown

| Criteria                       | Points |
|--------------------------------|--------|
| Length ≥ 8                     | +1     |
| Length ≥ 12                    | +1     |
| Length ≥ 16                    | +1     |
| Length ≥ 20                    | +1     |
| Uses uppercase                 | +1     |
| Uses lowercase                 | +1     |
| Uses digits                    | +1     |
| Uses special characters        | +1     |
| All character types used       | +1     |
| **Maximum Score**              | **9**  |

---

## 🧪 Strength Labels

| Score | Strength      | Color           |
|-------|---------------|-----------------|
| 0–2   | Very Weak     | 🔴 Red         |
| 3–4   | Weak          | 🟠 Orange      |
| 5     | Moderate      | 🟡 Yellow      |
| 6–7   | Strong        | 🟢 Light Green |
| 8–9   | Very Strong   | ✅ Green       |

---

## 📁 File Structure

locksmith/
├── index.html # Main HTML file
├── style.css # (Optional) Styling for visuals
├── script.js # Core password strength logic
└── README.md # Project documentation
