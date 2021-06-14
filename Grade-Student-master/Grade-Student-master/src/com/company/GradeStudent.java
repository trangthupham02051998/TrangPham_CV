package com.company;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.IntStream;

public class GradeStudent<TotalPoints> {

    static float WeightedScore1;
    static float WeightedScore2;
    static float WeightedScore3;
    private static int Weight1;
    private static int Weight2;


    //     Chao mung
    static void Begin() {
        System.out.println("This program reads exam/homework scores and reports your overall course grade");
    }

    // Diem Thi Giua Ky
    static double Midterm() {
//        Khai bao bien
        int TotalPoints = 0;
        int ScoreEarned;
        int WereScores = 0;

// Bat dau Midterm
        System.out.print("Midterm:");
        System.out.print("\n");
        Scanner sc = new Scanner(System.in);
//        Nhập trọng số
        System.out.print("Weight (0-100) ?");
        Weight1 = Math.min(sc.nextInt(), 100);
//        Nhập điểm đã đạt được
        System.out.print("Score earned:");
        ScoreEarned = sc.nextInt();
//        Điểm thi có được tăng không
        System.out.print("Were scores shifted (1 = yes, 2=no): ");
        WereScores = sc.nextInt();
        if (WereScores == 1) {
            WereScores = sc.nextInt();
        } else {
            WereScores = 0;
        }
//        Tổng điểm
        TotalPoints = Math.min(ScoreEarned + WereScores, 100);
        System.out.print(("Total points:") + (TotalPoints) + ("/100"));
        System.out.print("\n");
        WeightedScore1 =  (float) ((TotalPoints * Weight1) / 100.0);
        System.out.print("Weighted score:" + WeightedScore1  + ("/" + Weight1));
        System.out.print("\n");
        return WeightedScore1;
    }



    // Diem thi cuoi ky
    static double Final() {
//        Khai bao bien
        int TotalPoints = 0;
        double WeightedScore2;
        int ScoreEarned;
        int WereScores = 0;

// Bat dau Final
        System.out.print("\n");
        System.out.print("Final:");
        System.out.print("\n");
        Scanner sc = new Scanner(System.in);
//        Nhập trọng số
        System.out.print("Weight (0-100) ?");
        Weight2 = Math.min(sc.nextInt(), 100);
//        Nhập điểm đã đạt được
        System.out.print("Score earned:");
        ScoreEarned = sc.nextInt();
//        Nhập điểm tăng
        System.out.print("Were scores shifted (1 = yes, 2=no): ");
        WereScores = sc.nextInt();
        if (WereScores == 1) {
            System.out.print("Shift amount: ");
            WereScores = sc.nextInt();
        } else {
            WereScores = 0;
        }
//        Tổng điểm
        TotalPoints = Math.min(ScoreEarned + WereScores,100);
        System.out.print(("Total points:") + (TotalPoints) + ("/100"));
        System.out.print("\n");
//        Trọng số
        WeightedScore2 = Math.round ((TotalPoints * Weight2) / 100.0);
        System.out.print(("Weighted score:") + WeightedScore2 + ("/" + Weight2));
        return WeightedScore2;

    }

    // Bai Tap Ve Nha
    static double Homework() {
        //  Khai bao bien

        int AsmScore = 0;
        int maxAsmScore = 0;
        int Weight3;
        int SectionPoints = 0;
        // Bat dau HomeWork
        System.out.print("\n");
        System.out.print("HomeWork:");
        System.out.print("\n");
        Scanner sc = new Scanner(System.in);
        // Nhap Trong So
        System.out.print("Weight (0-100) ?");
        Weight3 = Math.min(sc.nextInt(), 100);
        // Nhap Bai Tap Ve Nha
        System.out.print("Number of assignments: ");
        int Assignments = sc.nextInt();
        //  Tao List Nhap Diem ASM
        List<Integer> asmScores = new ArrayList<>();
        List<Integer> asmMaxScores = new ArrayList<>();
        for (int i = 0; i < Assignments; i++) {
            System.out.printf("Assignment %d score and max: ", i + 1);
            int asmScore = sc.nextInt();
            int asmMaxScore = Math.min(sc.nextInt(), 150);
            asmScores.add(asmScore);
            asmMaxScores.add(asmMaxScore);
        }
        // Truy Xuat Phan Tu Trong Mang
        for (int i = 0; i < asmMaxScores.size(); i++) {
            maxAsmScore += asmMaxScores.get(i);
        }
        for (int i = 0; i < asmScores.size(); i++) {
            AsmScore += asmScores.get(i);
        }
//        So lop Tham Du
        System.out.print("How many sections did you attend: ");
        int Sections = sc.nextInt();
//        Tong Diem Chuyen Can
        SectionPoints = Math.min((5 * Sections),30);
        System.out.print("Section Points: " + (SectionPoints));
        System.out.print("\n");
//        Tong Diem
        int sumAsmScore = IntStream.of(AsmScore).sum();
        double TotalPoints = sumAsmScore + SectionPoints;
        System.out.print("Total Points: " + (TotalPoints));
        System.out.print("\n");
//        Tong Diem BTVN
        int sum_maxAsmScore = IntStream.of(maxAsmScore).sum();
        double TotalPointsMax = sum_maxAsmScore + 30;
//        Tinh Diem Trong So
        WeightedScore3 = Math.round((TotalPoints / TotalPointsMax) * Weight3 );
        System.out.print(("Weighted score: ") + WeightedScore3);
        return WeightedScore3;
    }

    // Report

    static void GPA() {
//    Khai Bao Bien
        int GPA = 0;
//        Bao cao
        double Overall = Math.min((Weight1 + Weight2 + Weight2), 100);
        System.out.print("\n");
        System.out.print(("Overall percentage:") + Overall);
        System.out.print("\n");
        if (Overall > 85) {
            GPA = (int) 3.0;

        } else if (84.99 <= Overall || Overall >= 75) {
            GPA = (int) 2.0;
        } else if (74.99 <= Overall || Overall >= 60) {
            GPA = (int) 0.7;
        } else {
            GPA = (int) 0.0;
        }
        System.out.print("\n");
        System.out.print(("Your grade will be at least:") + GPA);
        System.out.print("\n");
        if (GPA == (int) 3.0) {
            System.out.print("Bạn học rất tốt");
        } else if (GPA == (int) 2.0){
            System.out.print("Bạn học tốt");
        } else if (GPA == (int) 0.7){
            System.out.print("Bạn cần cố gắng hơn nữa");
        }else  {
            System.out.print("Bạn hãy chăm chỉ hơn nữa");
        }
    }

    public static void main(String[] args) {
        Begin();
        Midterm();
        Final();
        Homework();
        GPA();
    }
}


